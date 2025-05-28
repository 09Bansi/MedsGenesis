import React from 'react'
import { Link } from 'react-router-dom';
import MedsGenesis from './MedsGenesis.png';
import './Navbar.css'; 

const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-light" >
                <div className="container-fluid d-flex align-items-center">

                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={MedsGenesis} alt="MedsGenesis Logo" width="40" height="40" className="d-inline-block align-text-top me-2" />MedsGenesis
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-light ms-3 mt-2 mt-lg-0" type="button">FAQ</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;

