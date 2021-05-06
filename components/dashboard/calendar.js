import { Calendar } from "antd";
import React from 'react'

function onPanelChange(value, mode) {
  console.log(value, mode);
}
const calendar = () => {
    return ( 
              <div className="site-calendar-demo-card">
    <Calendar className="Calendar" fullscreen={false} onPanelChange={onPanelChange}/>
         </div>
        
    )
    }
export default calendar


