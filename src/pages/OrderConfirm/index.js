import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./orderconfirm.css"

const OrderConfirm = (props) => {
    return (
        <>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <div>
                <div className="card">
                    <div className="title">Thank You for Your Order</div>
                    <div className="info">
                        <div className="row">
                            <div className="col-7"> <span id="heading">Date</span><br></br> <span id="details">6 December 2021</span> </div>
                            <div className="col-5 pull-right"> <span id="heading">Order No.</span><br></br> <span id="details">00000001</span> </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <div className="row">
                            <div className="col-9"> <span id="name">6 Pk Glazed Donut</span> </div>
                            <div className="col-3"> <span id="price">$12.99</span> </div>
                        </div>
                        <div className="row">
                            <div className="col-9"> <span id="name">Shipping</span> </div>
                            <div className="col-3"> <span id="price">$1.00</span> </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="row">
                            <div className="col-9">TOTAL</div>
                            <div className="col-3"><big>$13.99</big></div>
                        </div>
                    </div>
                    <div className="tracking">
                        <div className="title">Tracking Order</div>
                    </div>
                    <div className="progress-track">
                        <ul id="progressbar">
                            <li className="step0 active " id="step1">Ordered</li>
                            <li className="step0 active text-center" id="step2">Shipped</li>
                            <li className="step0 active text-right" id="step3">On the way</li>
                            <li className="step0 text-right" id="step4">Delivered</li>
                        </ul>
                    </div>
                    <span>


                        <Link className="btn btn-warning" to="/products" role="button">See more donuts</Link>


                    </span>
                    <div className="footer">
                        <div className="row">
                            <div className="col-2"><img className="img-fluid" src="https://www.pngkey.com/png/detail/13-132570_donut-comments-black-and-white-donut-svg.png" /></div>
                            <div className="col-10">Want any help? Please &nbsp;<a href="#">contact us</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </>
    );
};

export default OrderConfirm;