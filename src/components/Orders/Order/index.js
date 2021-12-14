import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderedDonut from "./OrderedDonut";


const Order = (props) => {
    //console.log(props);
    const [itemCounts, setItemCounts] = useState({});
    const [uniqueDonuts, setUniqueDonuts] = useState([]);
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.cartContent);
    const currentUser = useSelector(state => state.currentCust);
    //console.log(currentUser);

    useEffect(() => {
        let counts = {};
        let uniqueItems = [];
        props.data.donuts_ordered.forEach(donut => {
            counts[donut.donut_id] = (counts[donut.donut_id] || 0) + 1; //Increment the count or set it to 1
        });
        //console.log(props.data.donuts_ordered.find( ({donut_id}) => donut_id === 21))
        for( let id in counts){ //For each donut id in the list
            console.log(typeof(id));
            uniqueItems.push(props.data.donuts_ordered.find( ({donut_id}) => donut_id == id)); //Add it to the list
        }

        //console.log(counts);
        //console.log(uniqueItems);
        setItemCounts(counts);
        setUniqueDonuts(uniqueItems);
    }, []);

        const orderDate = new Date(props.data.submission_date);
    return (
        <>
            <div className="bg-light">

               
                <div>
                    <div>Order No. {props.data.order_id}</div>
                    <div>Sent to {props.data.buyer.cust_address}</div>
                    <div>Purchased on { (orderDate.getMonth() + 1)}/{(orderDate.getDate()) }/{(orderDate.getFullYear()) } at {orderDate.getHours()}:{(orderDate.getMinutes() < 10) ? "0" + orderDate.getMinutes() : orderDate.getMinutes()  }
                    {orderDate.getHours() < 12 ? "am" : "pm"}  
                    </div>

                    <ul>
                        {
                            console.log(uniqueDonuts)
                        }
                        {
                        
                        uniqueDonuts.map(donut => {
                            return (
                                <>
                                    <OrderedDonut donut={donut} count={itemCounts[donut.donut_id]} />
                                </>
                            );
                           
                        })
                    }
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Order;