<<<<<<< HEAD
import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = () => {
=======
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = () => {

>>>>>>> origin/myles-backend
  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
   };
<<<<<<< HEAD
=======

>>>>>>> origin/myles-backend
  return (
    <>
      <Nav>
        <NavLink to='/'>O-Donutz</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </Nav>
    </>
  );
};

export default Navbar;