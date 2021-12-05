import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <a className="navbar-brand" href="#">
                DonutShop
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Menu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Login
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Sign Up
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};
export default Navbar;