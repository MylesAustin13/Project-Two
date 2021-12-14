import React, { useState } from 'react';
import './index.css';
import Login from '../../components/Login';
import LoginSuccess from '../../components/LoginSuccess';
import Navbar from '../../components/Navbar';

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Navbar />
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://images.vexels.com/media/users/3/190524/isolated/lists/4c56dddeffbb64257bb0ab0ffc334e1a-kawaii-donut.png' alt='donut' />
        </div>
        {!isSubmitted ? (
          <Login setSub={submitForm}/>
        ) : (
          <LoginSuccess />
        )}
      </div>
    </>
  );
};

export default LoginForm;

