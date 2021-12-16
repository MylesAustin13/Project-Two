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
        for (let id in counts) { //For each donut id in the list
            console.log(typeof (id));
            uniqueItems.push(props.data.donuts_ordered.find(({ donut_id }) => donut_id == id)); //Add it to the list
        }

        //console.log(counts);
        //console.log(uniqueItems);
        setItemCounts(counts);
        setUniqueDonuts(uniqueItems);
    }, []);

    const orderDate = new Date(props.data.submission_date);
    return (

        <>
            <div className="container">
                <div className="card m-3 border-warning">
                    <div >
                        <div className="card-header bg-dark border-warning">
                            Order No. {props.data.order_id}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Sent to {props.data.buyer.cust_address}</li>
                            <li className="list-group-item">Purchased on {(orderDate.getMonth() + 1)}/{(orderDate.getDate())}/{(orderDate.getFullYear())} at {orderDate.getHours()}:{(orderDate.getMinutes() < 10) ? "0" + orderDate.getMinutes() : orderDate.getMinutes()}
                                {orderDate.getHours() < 12 ? "am" : "pm"}
                            </li>
                        </ul>
                        <div className="card-header border-warning">Delivery Status</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="120" aria-valuenow={((Date.now() - orderDate) / 1000)}
                                style={{
                                    width: `${((Date.now() - orderDate) / 1000) / 6}%`
                                }}>
                                {console.log(((Date.now() - orderDate) / 1000))}
                                {console.log(((Date.now() - orderDate) / 1000) / 6)}
                            </div>

                        </div>
                        <h2 className="text-center"> Donuts:</h2>
                        <ul className="list-group list-group-flush">
                            {/* {
                                console.log(uniqueDonuts)
                            } */}
                            {
                            
                                uniqueDonuts.map(donut => {
                                    return (
                                        <>
                                            
                                            <li class="list-group-item">
                                                <OrderedDonut donut={donut} count={itemCounts[donut.donut_id]} />
                                            </li>
                                        </>
                                    );

                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>

        </>







        // <>
        //     <div className="bg-light">
        //         <div>
        //             <div>Order No. {props.data.order_id}</div>
        //             <div>Sent to {props.data.buyer.cust_address}</div>
        //             <div>Purchased on {(orderDate.getMonth() + 1)}/{(orderDate.getDate())}/{(orderDate.getFullYear())} at {orderDate.getHours()}:{(orderDate.getMinutes() < 10) ? "0" + orderDate.getMinutes() : orderDate.getMinutes()}
        //                 {orderDate.getHours() < 12 ? "am" : "pm"}
        //             </div>

        //             <div>Delivery Status</div>
        //             <div className="progress">
        //                 <div className="progress-bar progress-bar-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="120" aria-valuenow={((Date.now() - orderDate) / 1000)}
        //                     style={{
        //                         width: `${((Date.now() - orderDate) / 1000) / 6}%`
        //                     }}>
        //                     {console.log(((Date.now() - orderDate) / 1000))}
        //                     {console.log(((Date.now() - orderDate) / 1000) / 6)}
        //                 </div>

        //             </div>

        //             <ul>
        //                 {
        //                     console.log(uniqueDonuts)
        //                 }
        //                 {

        //                     uniqueDonuts.map(donut => {
        //                         return (
        //                             <>
        //                                 <OrderedDonut donut={donut} count={itemCounts[donut.donut_id]} />
        //                             </>
        //                         );

        //                     })
        //                 }
        //             </ul>

        //         </div>
        //     </div>

        // </>
    )
}
export default Order;