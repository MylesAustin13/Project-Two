import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./login.css"

function Login() {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">

                    <div className="wrapper">
                        <form method="" id="login" autocomplete="off" onSubmit={""}>

                            <div className="form-group">
                                <label htmlFor="">E-Mail Address</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" className="form-control" name="email" placeholder="Email Address" aria-label="Email" value="email" onChange={""}>
                                    </input>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Login Password</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="password" required="true" aria-label="password" value="password" onChange={""}>
                                </input>
                            </div>

                            <div class="col-6">
                                <div className="form-group form-check text-left">
                                    <input type="checkbox" name="remember" className="form-check-input" id="remember_me" />
                                    <label className="form-check-label" htmlFor="remember_me">Remember me</label>
                                </div>
                            </div>

                            <div className="col-sm-12 pt-3 text-right">
                                <p>Already registered ?<a href="/register">Register</a></p>
                            </div>

                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-warning btn-block"
                            />

                        </form>
                    </div>

                </div>
            </div>

        </div>
        <Footer />
        </>
    )
}

export default Login;

