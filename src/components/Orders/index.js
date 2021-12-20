import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Order from "./Order";
import './order.css';
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [filterDate, setFilterDate] = useState(Date.now());
    const [filterMethod, setFilterMethod] = useState("ALL");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(state => state.currentCust);
    const amILoggedIn = useSelector(state => state.loggedIn);

    useEffect(() => {
        //Get all the donuts

        if (amILoggedIn) {
            axios.get(`http://localhost:8080/orders/owner/${currentUser.cust_id}`)
                .then((resp) => {
                    setOrders(resp.data);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        else {
            alert("You aren't logged in!");
            navigate("/");

        }
    }, []);

    

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        //console.log(event);
        if (name === "filter_method") {
            setFilterMethod(value);
        }
        else if (name === "filter_date") {
            setFilterDate(value);
        }

    }


    const onSubmitHandler = (event) => { //Change the orders list
        event.preventDefault();
        let date = new Date(filterDate);//Date.parse(filterDate);
        if (amILoggedIn) {
            axios.get(`http://localhost:8080/orders/owner/${currentUser.cust_id}`)
                .then((resp) => {
                    console.log(date);
                    switch (filterMethod) {
                        case "BEFORE":
                            console.log("BEFORE");
                            setOrders(resp.data.filter(order =>
                                new Date(order.submission_date).getTime() < date.getTime()
                            ));
                            break;
                        case "AFTER":
                            console.log("AFTER");
                            setOrders(resp.data.filter(order =>
                                new Date(order.submission_date).getTime() >= date.getTime()
                            ));
                            break;
                        case "ALL":
                            console.log("ALL");
                            setOrders(resp.data);
                            break;
                        default:
                            setOrders(resp.data);
                            break;
                    }

                })
                .catch((error) => {
                    console.error(error);
                })
        }

    }
    const testState = () => {
        dispatch({
            type: "TestState"
        })
    }

    const todayRaw = new Date(Date.now());
    const myTimeZoneOffset = todayRaw.getTimezoneOffset();
    const today = new Date(todayRaw.getTime() - (myTimeZoneOffset * 60 * 1000));
    //`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}T${today.getHours()}:${today.getMinutes()}`
    return (
        <div>

            <div className="bg-dark" style={{ height: "100vh" }}>
                <form className="text-center mb-4" onSubmit={onSubmitHandler}>
                    <label className='form-label'>Filter your previous orders</label> <br />
                    <div className="btn-group " role="group" data-toggle="buttons" aria-label="Basic radio toggle button group" onChange={onChangeHandler}>
                        <input type="radio" style={{ display: "none" }} className="btn-check" name="filter_method" id="btnradio1" value="BEFORE" autoComplete="off" />
                        {
                            filterMethod === "BEFORE" ?
                                <label className="btn btn-danger" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio1">Before</label>
                                :
                                <label className="btn btn-info" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio1">Before</label>
                        }


                        <input type="radio" style={{ display: "none" }} className="btn-check" name="filter_method" id="btnradio2" value="AFTER" autoComplete="off" />
                        {
                            filterMethod === "AFTER" ?
                                <label className="btn btn-danger" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio2">After</label>
                                :
                                <label className="btn btn-info" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio2">After</label>
                        }

                        <input type="radio" style={{ display: "none" }} className="btn-check" name="filter_method" id="btnradio3" value="ALL" autoComplete="off" />
                        {
                            filterMethod === "ALL" ?
                                <label className="btn btn-danger" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio3">No Filter</label>
                                :
                                <label className="btn btn-info" style={{ borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} htmlFor="btnradio3">No Filter</label>
                        }

                    </div>
                    <input className="w-75 text-center" step="any" type="datetime-local" onChange={onChangeHandler} defaultValue={today.toISOString().split('.')[0]} name="filter_date" />
                    <button type="submit">Go!</button>

                </form>
                {
                    orders.length > 0 ?

                        orders.map((myorder) => {
                            return (
                                <>
                                    <Order data={myorder} />


                                </>);
                        })

                        :

                        <h1 className="text-light text-center"> You don't have any orders.</h1>


                }

            </div>
        </div>
    );
};

export default Orders;