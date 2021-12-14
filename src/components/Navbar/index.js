import React, { useState } from 'react';
import Cartbar from '../Cartbar';
import Sidebar from '../Sidebar';
import { Nav, NavLink, NavIcon, Bars, CartBars } from './NavbarElements';


const Navbar = () => {

  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


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
        <NavIcon onClick={toggleCart}>
           <CartBars />
        </NavIcon>
        <Cartbar isOpen={isCartOpen} toggle={toggleCart} />
        <Sidebar isOpen={isSideOpen} toggle={toggleSide} />
      </Nav>
    </>
  );
};

export default Navbar;