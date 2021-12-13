import React from "react";
import validate from './validateLogin';
import useLogin from './useLogin';
import './login.css';

const Login = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = useLogin(
        submitForm,
        validate
    );

    return (

        < div className='form-content-right' >
            <form method='post' onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Login
                </h1>
                
                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                
                <button className='form-input-btn' type='submit'>
                    Login
                </button>
                <span className='form-input-login'>
                    Not yet Signed up? <a href='/register'>Register</a>
                </span>
            </form>
        </div >


    );
};

export default Login;