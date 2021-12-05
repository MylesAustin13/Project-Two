import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('///')
            .then((response) => {
                setProducts(response.data.data);
            })
            .catch((error) => console.error(error));
    });

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => <Product data={product} />)
                }
            </div>

        </div>
    );

};
export default ProductList;