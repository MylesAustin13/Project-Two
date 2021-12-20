import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Product from "../Products/Product";
import './favorites.css';


const Favorites = () => {
    //const [orders, setOrders] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(state => state.currentCust);
    const amILoggedIn = useSelector(state => state.loggedIn);
    const favorites = useSelector(state => state.currentCust.favorites);

    useEffect(() => {
        //Get all the donuts

        if (amILoggedIn) {
            // axios.get(`http://localhost:8080/orders/owner/${currentUser.cust_id}`)
            //     .then((resp) => {
            //         setOrders(resp.data);
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     })
        }
        else {
            alert("You aren't logged in!");
            navigate("/");

        }
    }, []);

    const testDB = () => {
        axios.get("http://localhost:8080/donuts")
            .then((resp) => {
                console.log(resp.data);
            })
            .catch(error => console.error);
    }

    const testState = () => {
        dispatch({
            type: "TestState"
        })
    }
    return (
        <div className="bg-dark d-flex justify-content-center">
            {/* <button onClick={testDB}> TEST THE DB</button>
            <button onClick={testState}> TEST THE STATE</button> */}
            
            <div>
                {favorites.map((favorite) => {
                    return (
                        <div className="">
                            <Product data={favorite}/> 

                            <Product data={favorite} />

                        </div>);
                })}
            </div>
        </div>

    );
};

export default Favorites;