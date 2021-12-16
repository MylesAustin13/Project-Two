import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeaderContainer, HeaderContent, HeaderItems, HeaderH1, HeaderP, HeaderBtn } from './HeaderElements';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Products from '../Products';
import LoginForm from '../../pages/LoginPage';

const HeadJumbo = () => {

  const amILoggedIn = useSelector(state => state.loggedIn);

  return (
    <HeaderContainer>
      

      <HeaderContent>
        <HeaderItems>
          <HeaderH1>The Best Donuts Ever</HeaderH1>
          <HeaderP>Ready in 0 time</HeaderP>
          {
            amILoggedIn ?
              <Link to="/products"><HeaderBtn>Order now</HeaderBtn></Link>
              :
              <Link to="/login"><HeaderBtn>Order now</HeaderBtn></Link>

          }

        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeadJumbo;