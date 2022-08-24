import React from 'react'
import { AddedProducts } from './addedProducts/AddedProducts'
import './admin.css'
import SideBar from './sidebar/SideBar'

export default function Admin({product}) {
  return (
    <div className="admin">
       <SideBar/>
       <div className="home">
     
        {/* <FeaturedInfo />
        <Chart data ={userData} dataKey={"Active User"} title={"User Analytics"} grid/> */}
        <div className="homeWidget">
          {/* <WidgetSM /> */}
          <AddedProducts product={product} />
          {/* <AddedProducts/> */}
        </div>
        
    </div>
    </div>
   
  )
}