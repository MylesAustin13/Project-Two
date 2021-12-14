import React, { useState } from 'react';
<<<<<<< HEAD:src/pages/LoginPage/index.js
import './login.css';
// import Login from '../../components/Login';
=======
import './index.css';
import Login from '../../components/Login';
>>>>>>> origin/myles-backend:src/pages/Login/index.js
import LoginSuccess from '../../components/LoginSuccess';

const LoginForm = () => {
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
<<<<<<< HEAD:src/pages/LoginPage/index.js
          <LoginForm setSub={submitForm}/>
=======
          <Login setSub={submitForm}/>
>>>>>>> origin/myles-backend:src/pages/Login/index.js
        ) : (
          <LoginSuccess />
        )}
      </div>
    </>
  );
};

export default LoginForm;

