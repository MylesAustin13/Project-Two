import React from "react"
import validate from './validateRegister';
import useRegister from './useRegister';
import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
// import "./register.css"

const Register = ({submitForm}) => {

    const { handleChange, handleSubmit, values, errors } = useRegister(
        submitForm,
        validate
      );

    return (

        < div className = 'form-content-right' >
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Register Today
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Full Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='fullname'
                        placeholder='Enter your fullname'
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    {errors.fullname && <p>{errors.fullname}</p>}
                </div>
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
                <div className='form-inputs'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='/login'>here</a>
                </span>
            </form>
          </div >
        

    );
};

export default Register;