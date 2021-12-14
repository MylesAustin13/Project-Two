import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const OrderedDonut = (props) => {
    //console.log(props);
    
    //console.log(currentUser);

    return (
        <>
            <div className="bg-light">

                <ul>
                    {props.donut.donut_name} x{props.count}
                    <li>{props.donut.donut_description}</li>
                    <li>${(props.donut.donut_price * props.count).toFixed(2)}</li>
                </ul>
               
            </div>

        </>
    )
}
export default OrderedDonut;