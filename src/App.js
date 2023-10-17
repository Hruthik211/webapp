import React, { useState } from "react"
import Sidebar from "./Sidebar"
import './App.css'
import menu from './menu.png'
import searchicon from './search.webp'
import doller from './doller.avif'
import orders from './orders.jpg'
import wallet from './wallet.png'
import sales from './sales.webp'
import sea1 from './sea1.jpg'


import { Bar } from "react-chartjs-2"
import { Doughnut } from 'react-chartjs-2'
import {Chart,LinearScale,CategoryScale,BarElement,ArcElement} from 'chart.js'
import 'chartjs-plugin-datalabels';

Chart.register(
  LinearScale,CategoryScale,BarElement,ArcElement


)

function App(){
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5,11,3,4,10,10,17,9,8],
        backgroundColor: ['#b2d7ff', 'blue', '#b2d7ff', '#b2d7ff'],
        
        
        borderRadius:[10,10,10,10]
        
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide Y-axis grid lines
        },
        beginAtZero: true,
        display:false
      },
    },
  };
  const data1 = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['blue', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        width:['20','52','30']
      },
    ],
  };
  
  
 const[classnme,setclass]=useState(true)

 


  function shownavbar(){

   setclass(classnme => !classnme)

    
  }

  
let classvalue = classnme ? ' navclass':null;
  return(
<>
<img id="menubtn" src={menu} alt="" onClick={shownavbar}

/>
{classnme? <Sidebar data={classvalue}/>:null}
<div className="container">

  
<div className="header">

  <h3>Hello Shahrukh 👋🏻,</h3>
  <div className="searchbar">
    <img src={searchicon} width="18" height="18" alt=""/>
    <input type="text" placeholder="Search"/>


  </div>

  
</div>
<div className="cards">

  <div className="card-1">
    <img src={doller} width="70" height="70" alt=""/>
    <div className="card-1-text">
      <p className="p-1">Earning</p>
      <h3>$193k</h3>
      <p>⬆️<span>37.8%</span>this month</p>
    </div>

  </div>
  <div className="card-2">
  <img src={orders} width="70" height="70" alt=""/>
    <div className="card-1-text">
      <p className="p-1">Orders</p>
      <h3>$2.4k</h3>
      <p>⬇️<span>2%</span>this month</p>
    </div>
  </div>
  <div className="card-3">
  <img src={wallet} width="70" height="70" alt=""/>
    <div className="card-1-text">
      <p className="p-1">Balance</p>
      <h3>$2.4k</h3>
      <p>⬇️<span>2%</span>this month</p>
    </div>
  </div>
  <div className="card-4">
  <img src={sales} width="70" height="70" alt=""/>
    <div className="card-1-text">
      <p className="p-1">Total Sales</p>
      <h3>$69k</h3>
      <p>⬆️<span>11%</span>this month</p>
    </div>
  </div>
</div>

<div className="charts">

  <div className="barchat">

    <h3>Over view</h3><select><option>Quertery</option></select>

             <Bar data={data} options={options}/>

  </div>

  <div className="piechart">

    <h3>Customers</h3><p>Customers that buy products</p>

    <div className="text-area"><h3>65%</h3><p>Total<br></br>new Customers</p></div>
    
  <Doughnut data={data1}/>
  </div>
  

</div>

<div className="footer">
  <div className="footer-header">
    <h3>Product sell</h3>
    <div className="footer-header-inputs">

      <div className="footer-searchbar">
      <img src={searchicon} width="18" height="18" alt=""/>
        <input type="text" placeholder="Search"/>
      </div>
      <select><option>Last 30 days</option></select>


    </div>
  </div>



  <div className="footer-headings">

    <p>Product name</p>
    <div className="sub-headings">
      <p>Stock</p>
      <p>Price</p>
      <p>Total sales</p>
    </div>

  </div>
 <hr></hr>

  <div className="product-1">

    <div className="product-name">
    <img src={sea1} width="100" height="50" alt=""/>
    <div className="product-name-text"><h4>Abstract 3D</h4>
    <p>Lorem is the kindest thing isum world
    </p></div>
   

    </div>
    <div className="product-stats">
      <p>32 in stock</p>
      <p>$49.33</p>
      <p>$49.33</p>
    </div>
  </div>
  <div className="product-1">

<div className="product-name">
<img src={sea1} width="100" height="50" alt=""/>
<div className="product-name-text"><h4>Sarphens illustration</h4>
<p>Lorem is the kindest thing isum world
</p></div>


</div>
<div className="product-stats">
  <p>32 in stock</p>
  <p>$49.33</p>
  <p>$49.33</p>
</div>
</div>

</div>

 

</div>
</>

  )
}

export default App