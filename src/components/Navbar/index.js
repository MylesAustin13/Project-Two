import React, { useState } from 'react';
import Cartbar from '../Cartbar';
import Sidebar from '../Sidebar';
import { useSelector } from 'react-redux';
import { Nav, NavLink, NavIcon, CartIcon, Bars, CartBars } from './NavbarElements';


const Navbar = () => {

  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const amIloggedIn = useSelector(state => state.loggedIn);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }
  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  }

  return (
    <>
      <Nav>
        <NavLink to='/'>O-Donutz</NavLink>
        <NavIcon onClick={toggleSide}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        {
          amIloggedIn ?
            <>
              <CartIcon onClick={toggleCart}>
                <p>My Cart</p>
                <CartBars />
              </CartIcon>
              <Cartbar isOpen={isCartOpen} toggle={toggleCart} />
            </>
            :

            ""
        }

        <Sidebar isOpen={isSideOpen} toggle={toggleSide} />
      </Nav>
    </>
  );
};

export default Navbar;