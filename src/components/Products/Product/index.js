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
        <>
            <ProductCard key={props.ind}>

                <ProductImg src={props.data.donut_img} />
                <ProductInfo>
                    <ProductName>{props.data.donut_name}</ProductName>
                    <ProductDesc>{props.data.donut_description}</ProductDesc>
                    <ProductPrice>{props.data.donut_price}</ProductPrice>

                    <div className="row row-cols-3 justify-content-around">
                        <button className="btn btn-danger" onClick={subCount}>-</button>
                        <input value={itemCount} readOnly />
                        <button className="btn btn-success" onClick={addCount}>+</button>
                    </div>
                    
                    <button className="btn btn-primary btn-block" onClick={addToCartHandler}>Add Donut to Cart</button>
                    
                    {
                        currentUser.favorites.filter(item => item.donut_id === props.data.donut_id).length > 0 ?
                           // favorited ? //RISKY TO RELY ON THIS, MAYBE

                            <button className="btn btn-danger btn-block" onClick={removeFromFavoritesHandler} >Remove Donut from Favorites</button>

                            :

                            <button className="btn btn-warning btn-block" onClick={addToFavoritesHandler}> Add Donut to Favorites</button>
                    }
                    {
                        myCart.filter(item => item.info.donut_name === props.data.donut_name).length > 0 ?

                            //  <ProductButton>
                            <button className="btn btn-warning btn-block" onClick={removeFromCartHandler}>Remove Donut from Cart</button>
                            /* </ProductButton> */

                            :

                            ""
                    }
                </ProductInfo>
            </ProductCard>

        </>
    )
}
export default Product;