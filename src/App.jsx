import "./App.css";
import { Header } from "./component/header/Header";
import { Home } from "./component/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Checkout } from "./component/checkout/Checkout";
import { Login } from "./component/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { useStateValue } from "./utils/StateProvider";
import { Payment } from "./component/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Orders } from "./component/orders/Orders";
import { reducerAction } from "./utils/reducer";

const promise = loadStripe(
  "pk_test_51LYmN6GRVcB5JNrqaOKJMhNBVdnUzszbsILTLffPwqsRIFiEUnHAda7VZBCBPZ9eH5b0YP1F2F02WsZSZPIPp76R00yWppJSAJ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run when App compenent loads
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        // console.log('user: '+uid);
        dispatch({
          type: reducerAction.SET_USER,
          user: user,
        });
        // ...
      } else {
        // User is signed out
        dispatch({
          type: reducerAction.SET_USER,
          user: null,
        });
        // ...
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path={"/"} exact element={<Home />}></Route>
          <Route path={"/checkout"} element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          ></Route>
          <Route path="/orders" element={<Orders/>}></Route>

          {/* unknown route */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
                <Link to={"/"}>
                  <button
                    style={{ backgroundColor: "green", textDecoration: "none" }}
                  >
                    Home
                  </button>
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
