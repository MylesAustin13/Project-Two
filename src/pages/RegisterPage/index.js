import React, { useState } from 'react';
import './index.css';
import Register from '../../components/Register';
import RegisterSuccess from '../../components/RegisterSuccess';

const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.misskatecuttables.com%2Fuploads%2Fshopping_cart%2F10600%2Flarge_donut.png&f=1&nofb=1' alt='donut' />
        </div>
        {!isSubmitted ? (
          <Register />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};

export default RegisterForm;