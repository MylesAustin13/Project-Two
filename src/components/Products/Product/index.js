import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo,
    ProductName, ProductDesc, ProductPrice, ProductButton
} from '../ProductsElements';

const Product = (props) => {
    //console.log(props);
    const [itemCount, setItemCount] = useState(1);
    const [favorited, setFavorited] = useState(false);
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.cartContent);
    const currentUser = useSelector(state => state.currentCust);
    //console.log(currentUser);



    const addCount = () => {
        setItemCount(itemCount + 1);
    }

    const subCount = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
        }

    }

    const addToCartHandler = () => {
        dispatch({
            type: "AddToCart", obj: {
                info: props.data,
                count: itemCount,
            }
        })
        // console.log("Dispatching!");
    }

    const applyToCartHandler = () => {
        dispatch({
            type: "ApplyToCart", obj: {
                info: props.data,
                count: itemCount,
            }
        })
        // console.log("Dispatching!");
    }
    const removeFromCartHandler = () => {
        dispatch({
            type: "RemoveFromCart", obj: {
                info: props.data,
                count: 0,
            }
        })
        //console.log("Dispatching!");
    }

    const addToFavoritesHandler = () => {
        dispatch({
            type: "AddToFavorites",
            donut: props.data
        })
        //currentUser.favorites.push(props.data);
        setFavorited(true);
    }
    const removeFromFavoritesHandler = () => {
        dispatch({
            type: "RemoveFromFavorites",
            donut: props.data
        });
        //currentUser.favorites = currentUser.favorites.filter(donut => donut.donut_id !== props.data.donut_id);
        setFavorited(false);
    }


    return (
        <div className="border border-5 border-light m-auto p-auto justify-content-center d-flex" style={{height: "50rem"}}>
            <ProductCard className="bg-dark text-light" key={props.ind}>
                <ProductImg src={props.data.donut_img} />
                <div className="row w-100">
                    <ProductName className="col-md-8 mt-5">{props.data.donut_name}</ProductName>
                    {
                        currentUser.favorites.filter(item => item.donut_id === props.data.donut_id).length > 0 ?

                            <svg onClick={removeFromFavoritesHandler} role="button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-heart-fill mt-5" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            :
                            <svg onClick={addToFavoritesHandler} role="button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart mt-5" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>

                    }
                </div>
                
                <ProductInfo>


                    <ProductDesc>{props.data.donut_description}</ProductDesc>
                    <ProductPrice>${props.data.donut_price} each</ProductPrice>

                    {
                        myCart.filter(item => item.info.donut_name === props.data.donut_name).length > 0 ?
                            <>
                                <div>
                                    <h3 className="text-light">{myCart[myCart.findIndex((item) => item.info.donut_id === props.data.donut_id)].count}x in cart</h3>
                                </div>

                            </>
                            :

                            ""
                    }
                    <div className="row row-cols-3">

                        <svg onClick={subCount} role="button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="red" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                        </svg>

                        <input className="text-center" value={itemCount} readOnly />

                        <svg onClick={addCount} role="button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                        </svg>

                    </div>
                    {
                        myCart.filter(item => item.info.donut_name === props.data.donut_name).length > 0 ?
                            <>
                                <div className="row justify-content-between">

                                    <svg onClick={applyToCartHandler} role="button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="lightblue" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                                    </svg>

                                    <svg onClick={removeFromCartHandler} role="button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="pink" class="bi bi-bag-x-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z" />
                                    </svg>

                                </div>

                            </>
                            :
                            <svg onClick={addToCartHandler} role="button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="lightblue" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                            </svg>

                    }



                </ProductInfo>
            </ProductCard>

        </div>
    )
}
export default Product;