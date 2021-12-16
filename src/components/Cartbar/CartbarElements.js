import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaTimes} from 'react-icons/fa';

export const CartbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  top: 0;
  transition: 0.3s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0' : '-450px')};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CartbarMenu = styled.div`
  display: grid;
  margin-top: 20%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const CartbarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #ba7f09;
    transition: 0.2s ease-in-out;
  }
`;

export const CartButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartbarRoute = styled(Link)`
  background: #ba7f09;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #0944ba;
    color: #ba7f09;
  }
`;