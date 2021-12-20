import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const FavoriteDonut = (props) => {
    //console.log(props);
    
    //console.log(currentUser);

    return (
        <>
            <div className="bg-light">

                <ul>
                    {props.donut.donut_name}
                    <li>{props.donut.donut_description}</li>
                    <li>${(props.donut.donut_price).toFixed(2)}</li>
                </ul>
               
            </div>

        </>
    )
}
export default FavoriteDonut;