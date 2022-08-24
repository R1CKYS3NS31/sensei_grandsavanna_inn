import React from 'react'
import './addedProducts.css'

export const AddedProducts = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton "+type}>{type}</button>;
      };
    
      return (
        <div className="widgetSm">
          <h3 className="widgetLgTitle">Latest Transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="sensei.png" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Sensei</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">Ksh. 300.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
           
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="sensei.png" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Sensei</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">Ksh. 300.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined"/>
              </td>
            </tr>
           
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="sensei.png" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Sensei</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">Ksh. 300.00</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
           
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="sensei.png" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Sensei</span>
              </td>
              <td className="widgetLgDate">13 Mar 2022</td>
              <td className="widgetLgAmount">Ksh. 300.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          </table>
        </div>
      );
}
