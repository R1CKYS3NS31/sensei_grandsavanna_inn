import React from "react";
import "./addedProducts.css";

export const AddedProducts = ({ product }) => {
  const Th = [
    "Name",
    "Quantity",
    "Category",
    "Purchase price",
    "Selling price",
    "Profit",
  ];
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Stock Products</h3>

      <table className="widgetLgTable">
        <thead className="widgetLgTr">
          {Th.map((th, index) => (
            <th className="widgetLgTh" key={index}>
              {th}
            </th>
          ))}
        </thead>
        <tbody>
          {product.map((product, i) => (
            <tr key={product.id} className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={product.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{product.name}</span>
              </td>
              <td className="widgetLgDate">{product.quantity.quantity}</td>

              <td className="widgetLgDate">{product.category.category}</td>

              <td className="widgetLgAmount">
                <small>Ksh.</small> {product.purchasePrice}
              </td>
              <td className="widgetLgAmount">
                <small>Ksh.</small> {product.sellingPrice}
              </td>
              <td className="widgetLgAmount">
                <small>Ksh.</small> {product.profit}
              </td>
              {/* <td className="widgetLgStatus">
                <Button type="Approved" />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
