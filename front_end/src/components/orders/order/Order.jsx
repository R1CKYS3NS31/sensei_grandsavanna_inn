import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, getOrderTotal } from "../../../utils/reducer";
import { useStateValue } from "../../../utils/StateProvider";

import "./order.css";

export const Order = ({ order }) => {
  // item:{
  //   id:Date.now(),
  //   orderAmount:getBasketTotal(basket),
  //   orderProducts:basket.map(item=>({
  //     id:item.id,
  //     title:item.title,
  //     image:item.image,
  //     price:item.price,
  //     rating:item.rating,
  //     quantity:item.quantity,
  //   }))
  const [{ basket, user }, dispatch] = useStateValue();
  const Th = ["OrderId", "Order amount", "Items Ordered"];

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.id).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>
      <table className="widgetLgTable">
        <thead className="widgetLgTr">
          {Th.map((th, index) => (
            <th className="widgetLgTh" key={index}>
              {th}
            </th>
          ))}
        </thead>
        <tbody>
          {order.map((order, i) => (
            <tr key={order.id} className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.id}</span>
              </td>
              <td className="widgetLgAmount">
                <small>Ksh.</small> {order.orderAmount}
              </td>
              <td className="widgetLgDate">
                {order.orderProducts.map((item) => item.title)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getOrderTotal(order)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh. "}
      />
    </div>
  );
};
