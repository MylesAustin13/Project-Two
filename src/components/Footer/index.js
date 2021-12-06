import React from "react";
import "./footer.css";

const Footer = () => {

    return (
        <div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
                    <p className="mb-1">&copy; 2021 Revature</p>
                    <ul className="list-inline">
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
                            Support
                        </a>
                    </li>
                    </ul>
                </nav>
            </footer>



        </div>
    );
};

export default Footer;