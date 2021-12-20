import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import {GiDonut} from 'react-icons/gi'

export const Nav = styled.nav`
  background: #7f7053;
  opacity: 0.8;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position: fixed;
  z-index: 10; 
  top: 0; 
  width: 100%;   
`;

export const NavLink = styled(Link)`
  color: #fff;
  
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bolder;
  }
`;
export const CartIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(125%, 100%);
    font-weight: bolder;
  }
`;

export const Bars = styled(CgMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const CartBars = styled(CgMenu)`
  font-size: 2rem;
  transform: translate(50%, -15%);
`;