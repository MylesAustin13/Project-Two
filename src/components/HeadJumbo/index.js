import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeaderContainer,HeaderContent,HeaderItems,HeaderH1,HeaderP,HeaderBtn} from './HeaderElements';
const HeadJumbo = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
   };
  
    return (
      <HeaderContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeaderContent>
          <HeaderItems>
            <HeaderH1>The Best Donuts Ever</HeaderH1>
            <HeaderP>Ready in 0 time</HeaderP>
            <HeaderBtn>Order now</HeaderBtn>
          </HeaderItems>
        </HeaderContent>
      </HeaderContainer>
    );
  };
  
  export default HeadJumbo;