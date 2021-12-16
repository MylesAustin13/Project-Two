import React from "react";
import { CartbarContainer, Icon, CloseIcon, CartbarMenu, CartbarLink, CartbarRoute, CartButton } from './CartbarElements';
import "./cartbar.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Products/Product";

const Cartbar = ({ isOpen, toggle }) => {

    const dispatch = useDispatch();
    const amILoggedIn = useSelector(state => state.loggedIn);
    const myCart = useSelector(state => state.cartContent);

    const calculateTotal = () => { //Get the price of the cart's contents
        let sum = 0;
        for (let i = 0; i < myCart.length; i++) {
            sum += myCart[i].info.donut_price * myCart[i].count;
        }
        return sum;
    }

    return (
        <CartbarContainer className="bg-dark text-light" isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <CartbarMenu className="overflow-auto">
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
                <div className="row">
                    {console.log(myCart)}

                    {
                        amILoggedIn ?
                            <>
                                <hr />
                                <div className="row row-cols-1">
                                    {myCart.map((item) => {
                                        return (
                                            <>
                                                <hr></hr>
                                                {/* <h1>{item.count}x of:</h1> */}
                                                <Product data={item.info} />
                                            </>);
                                    })}
                                </div>

                                {
                                    myCart.length > 0 ?
                                        <>
                                            <h2>Total Price: ${calculateTotal().toFixed(2)}</h2>
                                            <CartbarLink className="text-light m-3" to="/checkout">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-fill m-3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                                Checkout</CartbarLink>
                                        </>
                                        :
                                        ""
                                }

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