import React from "react";
import './luz.css'


function Luz({ className, colorChange, color }) {
    return (
        <div className={className} 
        onClick={() => colorChange(color)} ></div>
    )
}

export default Luz