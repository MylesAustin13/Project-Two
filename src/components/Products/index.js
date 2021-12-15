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
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myCart = useSelector(state => state.cartContent);
    const amILoggedIn = useSelector(state => state.loggedIn);

    useEffect(() => {
        //Get all the donuts

        if (amILoggedIn) {
            axios.get("http://localhost:8081/donuts")
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
        axios.get("http://localhost:8081/donuts")
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

    const onChangeHandler = (event) => { //For the search bar
        const { name, value } = event.target;
        setSearchText(value);
    }
    const onSubmitHandler = (event) => { //Change the donuts list
        event.preventDefault();
        axios.get(`http://localhost:8081/donuts/search/${searchText}`)
        .then((resp) => {
            console.log(resp.data);
            setDonuts(resp.data);
        })
        .catch(error => console.error(error));
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
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={onChangeHandler} placeholder="Search..." name="searchbar" />
                <button type="submit">Go!</button>
            </form>
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


// const Products = ({ heading, data }) => {
//     const [itemCount, setItemCount] = useState(1);
//     const dispatch = useDispatch();
//     const myCart = useSelector(state => state.cartContent);

//     const addCount = () => {
//         setItemCount(itemCount + 1);
//     }

//     const subCount = () => {
//         if (itemCount > 1) {
//             setItemCount(itemCount - 1);
//         }

//     }

//     const addToCartHandler = (event) => {
//         console.log(event.target.dataset.name);
//         dispatch({
//             type: "AddToCart", obj: {
//                 info: {
//                     name: event.target.dataset.name,
//                     price: event.target.dataset.price
//                 },
//                 count: itemCount,
//             }
//         })
//         // console.log("Dispatching!");
//     }

//     const removeFromCartHandler = (product) => {
//         dispatch({
//             type: "RemoveFromCart", obj: {
//                 info: product,
//                 count: 0,
//             }
//         })
//         //console.log("Dispatching!");
//     }
//     return (
//         <ProductsContainer>
//             <ProductsHeading>{heading}</ProductsHeading>
//             <div className="wrapper">
//                             {console.log(myCart)}
//                             <ul>

//                                 {myCart.length > 0 ? myCart.map(item => <li>{item.info.name} x{item.count}</li>) : ""}
//                             </ul>
//                         </div>
//             <ProductWrapper>
//                 {data.map((product, index) => {
//                     return (
//                     <>
//                         <Product data={product} ind={index}/>


//                     </>);
//                 })}
//             </ProductWrapper>
//         </ProductsContainer>
//     );
// };

export default Products;