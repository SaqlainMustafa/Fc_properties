import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/images/logo.png';
import flag from '../assets/images/country.png';
import { RiWhatsappLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img className='logo' src={logo} alt='' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/buy' className="nav-link active" aria-current="page"W>Buy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/rent' className="nav-link">Rent</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hot Projects
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/' className="dropdown-item">Action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Area
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/' className="dropdown-item">Action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Developers
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/' className="dropdown-item">Action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/' className="dropdown-item">Action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/'className="dropdown-item">Action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Another action</Link></li>
                                    <li><Link to='/' className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="nav-contact-content d-flex align-items-center mt-md-0 mt-3">
                            <Link to='/' className="nav-whatsapp">
                                <RiWhatsappLine className='nav-whatsapp-logo' />
                            </Link>
                            <div className="flag-selection d-flex align-items-center">
                                <img className='logo' src={flag} alt='' />
                                <p className='coutry-name mb-0'>RU</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar