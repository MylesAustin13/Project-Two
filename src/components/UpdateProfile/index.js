import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const UpdateProfile = (props) => {


    const [values, setValues] = useState({
        cust_email: '',
        cust_password: '',
        cust_address: ''
    });
    const [errors, setErrors] = useState({});
    const [updatedProfile, setUpdated] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.currentCust);

    const [displayAddress, setDisplayAddress] = useState(currentUser.cust_address);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };


    const setSubmitted = () => {
        props.setSub();
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let errorsExist = validateUpdate();
        console.log(errorsExist);
        console.log(values);

        if (errorsExist === false) { //If no errors
            let updUser = {
                ...currentUser,
                cust_address: values.cust_address
            }
            axios.put(`http://localhost:8080/customers`, updUser)
                .then(resp => {
                    //console.log(resp)
                    if (resp.data !== "") { // "" means the customer is null
                        setDisplayAddress(resp.data.cust_address);
                        setUpdated(true); 
                        dispatch({ //update the store
                            type: "UpdateCustomer"
                        })
                    }
                })
                .catch(error => console.error(error))
        }
    }

    const validateUpdate = () => {
        let hasErrors = false;
        let errors = {};

        // if (!values.cust_email) {
        //     hasErrors = true;
        //     errors.cust_email = 'Email required';
        // } else if (!/\S+@\S+\.\S+/.test(values.cust_email)) {
        //     hasErrors = true;
        //     errors.cust_email = 'Email address is invalid';
        // }
        // if (!values.cust_password) {
        //     hasErrors = true;
        //     errors.cust_password = 'Password is required';
        // } else if (values.cust_password.length < 6) {
        //     hasErrors = true;
        //     errors.cust_password = 'Password needs to be 6 characters or more';
        // }
        if (!values.cust_address) {
            hasErrors = true;
            errors.cust_address = 'Address required';
        }
        setErrors(errors);
        return hasErrors;
    }


    return (

        < div className='form-content-right' >
            <form method='post' onSubmit={handleSubmit} className='form' noValidate>

                {
                    updatedProfile ? 

                    <h1>Profile Updated!</h1>

                    :

                    ""
                }
                <h1>
                    Update My Profile
                </h1>
                
                <div className='form-inputs'>
                    <label className='form-label'>Current Address: {displayAddress}</label>
                    <input
                        className='form-input'
                        type='text'
                        name='cust_address'
                        placeholder='Enter your new address'
                        value={values.cust_address}
                        onChange={handleChange}
                    />
                    {errors.cust_address && <p>{errors.cust_address}</p>}
                </div>
                

                <button className='form-input-btn' type='submit'>
                    Update Profile
                </button>

            </form>
        </div >


    );
};

export default UpdateProfile;