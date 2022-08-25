import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { useStateValue } from "../../utils/StateProvider";
import { Order } from "./order/Order";
import "./orders.css";

export const Orders = () => {
  const [{ basket, user, order }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      setOrders(order);
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log(order);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {order.length === 0 ? (
          <p>no order</p>
        ) : (
          // orders?.map((order) => (

              <Order order={order} />
          //   ))
          
        )}
      </div>
    </div>
  );
};
