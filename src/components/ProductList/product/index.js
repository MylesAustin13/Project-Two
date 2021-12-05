import React from "react";

const Product = (props) => {
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={"" + props.data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5>{props.data.productName}</h5>
                    <p className="card-title">{props.data.unit}</p>
                    
                    <h1>{"$"+ props.data.price} <del> {"$" + props.data.mrp}</del></h1>
                    <p className="card-text">{props.data.description}</p>
                    <a href="#" className="btn btn-warning btn-block">Add Donut to Carts</a>
                </div>
            </div>
        </div>
    )
}
export default Product;