import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo,
    ProductName, ProductDesc, ProductPrice, ProductButton
} from '../ProductsElements';

const Product = (props) => {
    console.log(props);
    const [itemCount, setItemCount] = useState(1);
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.cartContent);

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

    


    return (
        <>
            <ProductCard key={props.ind}>

                <ProductImg src={props.data.donut_img} />
                <ProductInfo>
                    <ProductName>{props.data.donut_name}</ProductName>
                    <ProductDesc>{props.data.donut_desc}</ProductDesc>
                    <ProductPrice>{props.data.donut_price}</ProductPrice>

                    <div className="row row-cols-3 justify-content-around">
                        <button className="btn btn-danger" onClick={subCount}>-</button>
                        <input value={itemCount} readOnly />
                        <button className="btn btn-success" onClick={addCount}>+</button>
                    </div>
                    <ProductButton>
                        <button className="btn btn-primary btn-block" onClick={addToCartHandler}>Add Donut to Cart</button>
                    </ProductButton>
                    {
                         myCart.filter(item => item.info.donut_name === props.data.donut_name).length > 0 ?

                         <ProductButton><button className="btn btn-warning btn-block" onClick={removeFromCartHandler}>Remove Donut from Cart</button></ProductButton>

                            :

                            ""
                    }
                </ProductInfo>
            </ProductCard>

        </>
    )
}
export default Product;