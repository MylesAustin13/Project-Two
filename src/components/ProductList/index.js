import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
    //const [products, setProducts] = useState([]);
    /*
    useEffect(() => {
        axios
            .get('///')
            .then((response) => {
                setProducts(response.data.data);
            })
            .catch((error) => console.error(error));
    });
    */

    const myCart = useSelector(state => state.cartContent);


    return (
        <div className="container">
            <div className="wrapper">
                {console.log(myCart)}
                <ul>
                    
                    {myCart.length > 0 ? myCart.map(item => <li>{item.info.productName} x{item.count}</li>) : ""}
                </ul>
            </div>

            <div className="row">
                <Product data={{
                    quantity: 100,
                    description: "Bring home the yummy taste of green chicken fried in fresh refined oil with the taste of Afghani",
                    status: true,
                    position: 1,
                    created: "2019-12-02T05:35:50.063Z",
                    _id: "5de4a2b6a32d0906687812ea",
                    catId: 1,
                    "subId": 1,
                    productName: "Chicken Hariyali 150 grams",
                    image: "chicken_hariyali.jpeg",
                    unit: "1",
                    price: 80,
                    mrp: 100,
                    __v: 0
                }
                } />

                <Product data={{
                    quantity: 100,
                    description: "A delightful combo with the combination of 2 pcs chicken samosa, 2 pcs chicken cutlet, 2pcs chicken saucelick stick, 2 pcs dahi vada and 2 pcs of uddin vada with compliment of 2 pcs of dates and 1 sachet of tamato ketchup",
                    status: true,
                    position: 1,
                    created: "2019-12-02T05:37:21.312Z",
                    _id: "5de4a38ef571123984a948b4",
                    catId: 1,
                    subId: 3,
                    productName: "Chicken Samosa Combo",
                    image: "chicken_samosa.jpg",
                    unit: "1 delivery free",
                    price: 230,
                    mrp: 330,
                    __v: 0
                }
                } />
            </div>

        </div>
    );

};
export default ProductList;