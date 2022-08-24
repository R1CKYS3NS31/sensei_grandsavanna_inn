import React from 'react'
import './addedProducts.css'

export const AddedProducts = () => {
    const Th = ['Name','Quantity','Category','Purchase price','Selling price']
    const Button = ({ type }) => {
        return <button className={"widgetLgButton "+type}>{type}</button>;
      };
    
      return (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Stock Products</h3>

          <table className="widgetLgTable">
            <tr className="widgetLgTr">
                {Th.map((th,index)=>(
                    <th className="widgetLgTh" key={index}>{th}</th>
                ))}
              
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
