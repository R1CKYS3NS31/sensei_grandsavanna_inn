import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Checkout } from "./components/checkout/Checkout";
import { Login } from "./components/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect, useState } from "react";
import { useStateValue } from "./utils/StateProvider";
import { Payment } from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Orders } from "./components/orders/Orders";
import { reducerAction } from "./utils/reducer";

import { Product } from "./components/product/Product";
import Admin from "./components/admin/Admin";
import NewProduct from "./components/admin/newProduct/NewProduct";

const promise = loadStripe(
  "pk_test_51LYmN6GRVcB5JNrqaOKJMhNBVdnUzszbsILTLffPwqsRIFiEUnHAda7VZBCBPZ9eH5b0YP1F2F02WsZSZPIPp76R00yWppJSAJ"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // run when App compenent loads
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // const uid = user.uid;
        // console.log('user: '+uid);
        dispatch({
          type: reducerAction.SET_USER,
          user: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: reducerAction.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  // admin
    // new product
    const newProduct = async (product) => {
      const res = await fetch("http://localhost:9000/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const productdata = await res.json();
      setProducts([...products, productdata]);
    };
   
    

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
          <Route path="/orders" element={<Orders />}></Route>
          {/* admin */}
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path={"/newProduct"}
            element={
              <NewProduct
               newProduct={newProduct}
              // productImg={productImg}
              />
            }
          ></Route>

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
