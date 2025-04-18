import React from 'react'
import { Link } from 'react-router-dom';
import MedsGenesis from './MedsGenesis.png';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark text-light" >
                <div className="container-fluid">
                <img src={MedsGenesis} alt="MedsGenesis.png" />
                    <Link className="navbar-brand" to="/">MedsGenesis</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/Service">Service</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <button type="button" className="btn">FAQ</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar

