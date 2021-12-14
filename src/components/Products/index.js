import {
    ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo,
    ProductName, ProductDesc, ProductPrice, ProductButton
} from './ProductsElements';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from './Product';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Products = ({ heading, data }) => {
    const [donuts, setDonuts] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myCart = useSelector(state => state.cartContent);
    const amILoggedIn = useSelector(state => state.loggedIn);

    useEffect(() => {
        //Get all the donuts

        if (amILoggedIn) {
            axios.get("http://localhost:8080/donuts")
                .then((resp) => {
                    setDonuts(resp.data);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        else{
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
        <ProductsContainer>
            <button onClick={testDB}> TEST THE DB</button>
            <button onClick={testState}> TEST THE STATE</button>
            <ProductsHeading>{heading}</ProductsHeading>
            <div className="wrapper">
                {/* {console.log(myCart)} */}
                <ul>

                    {myCart.length > 0 ? myCart.map(item => <li>{item.info.donut_name} x{item.count}</li>) : ""}
                </ul>
            </div>
            <ProductWrapper>
                {donuts.map((product, index) => {
                    return (
                        <>
                            <Product data={product} ind={index} />


                        </>);
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
};

export default Products;