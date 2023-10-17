import React from "react"
import icon1 from './icons8-settings-50.png'
import icon2 from './icons8-rain-and-light-sensor-50.png'
import icon3 from './icons8-rear-window-defogger-24.png'
import icon4 from './icons8-admin-settings-male-48.png'
import icon5 from './icons8-income-50.png'
import icon6 from './icons8-dribbble-64.png'
import icon7 from './icons8-help-30.png'
import './App.css'

import jon from './491283119.jpg'
function Sidebar(props){

    return(

<>
<div className={`sidebar${props.data}`}>

    <div className="head"><img width="23" height="23" src={icon1} alt=""/> <h2>Dashboard</h2></div>



    <div className="links">

        <ul>

            <div className="list"><img width="23" height="23" src={icon2} alt=""/><li>Dashboard</li></div>

            <div className="list"><img width="23" height="23" src={icon3} alt=""/><li>Product</li></div>
            <div className="list"><img width="23" height="23" src={icon4} alt=""/><li>Customers</li></div>
            <div className="list"><img width="23" height="23" src={icon5} alt=""/><li>Income</li></div>
            <div className="list"><img width="23" height="23" src={icon6} alt=""/><li>Pramote</li></div>
            <div className="list"><img width="23" height="23" src={icon7} alt=""/><li>Help</li></div>

        </ul>
    </div>

    <div className="foot">
        <img width="40" height="40" src={jon} alt=""/>

        <div>

            <h4>Jon Snow</h4>
            <p>Project manager</p>
        </div>
    </div>
</div>
</>
    )
}

export default Sidebar