import {
    ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo,
    ProductName, ProductDesc, ProductPrice, ProductButton
} from './ProductsElements';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from './Product';
import axios from 'axios';
<<<<<<< HEAD

const Products = ({ heading, data }) => {
    const [donuts, setDonuts] = useState([]);

    const myCart = useSelector(state => state.cartContent);

=======



const Products = ({ heading, data }) => {
    const [donuts, setDonuts] = useState([]);
    
    const myCart = useSelector(state => state.cartContent);

>>>>>>> origin/myles-backend

    useEffect(() => {
        //Get all the donuts
        axios.get("http://localhost:8080/donuts")
<<<<<<< HEAD
            .then((resp) => {
                setDonuts(resp.data);
            })
            .catch((error) => {
                console.error(error);
            })
=======
        .then((resp) => {
            setDonuts(resp.data);
        })
        .catch((error) => {
            console.error(error);
        })
>>>>>>> origin/myles-backend
    }, []);

    const testDB = () => {
        axios.get("http://localhost:8080/donuts")
            .then((resp) => {
                console.log(resp.data);
            })
            .catch(error => console.error);
    }
    return (
        <ProductsContainer>
            <button onClick={testDB}> TEST THE DB</button>
            {/* <ProductsHeading>{heading}</ProductsHeading> */}
            <div className="wrapper">
<<<<<<< HEAD
                {/* {console.log(myCart)} */}
                <ul>

                    {myCart.length > 0 ? myCart.map(item => <li>{item.info.donut_name} x{item.count}</li>) : ""}
                </ul>
            </div>
=======
                            {/* {console.log(myCart)} */}
                            <ul>

                                {myCart.length > 0 ? myCart.map(item => <li>{item.info.donut_name} x{item.count}</li>) : ""}
                            </ul>
                        </div>
>>>>>>> origin/myles-backend
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