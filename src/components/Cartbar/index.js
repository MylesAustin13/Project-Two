import React from "react";
import { CartbarContainer, Icon, CloseIcon, CartbarMenu, CartbarLink, CartbarRoute, CartButton } from './CartbarElements';
import "./cartbar.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Products/Product";

const Cartbar = ({ isOpen, toggle }) => {

    const dispatch = useDispatch();
    const amILoggedIn = useSelector(state => state.loggedIn);
    const myCart = useSelector(state => state.cartContent);



    return (
        <CartbarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <CartbarMenu>
                <div className="row">
                    {console.log(myCart)}
                    {
                        myCart.length === 0 ?
                            <>
                                <h2>Your cart is empty.</h2>
                                <h2>Grab some donuts!</h2>
                            </>
                            :

                            <>
                                <h2>Your cart:</h2>
                            </>
                    }
                    {
                        amILoggedIn ?
                            <>
                            <hr />
                                <div className="row row-cols-1">
                                    {myCart.map((item) => {
                                        return (
                                            <>
                                            <hr></hr>
                                                <h1>{item.count}x of:</h1>
                                                <Product data={item.info} />
                                            </>);
                                    })}
                                </div>

                            </>
                            :
                            <>
                                <p>Please Log in!</p>
                            </>
                    }
                </div>

            </CartbarMenu>

        </CartbarContainer>
    );
};

export default Cartbar;