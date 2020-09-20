import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/Navbar.css'
import logo from './../assets/logo.png'

const Navbar = ({see}) => {
    return(
        <nav className="navbar navbar-expand-md padding-navbar background background-color">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        src={logo}
                        alt="logo de Adevolver"
                        className="logo-img"
                    />
                </Link>
                <nav>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="screen-reader-text">Toggle menu</span>
                    </button>
                </nav>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {
                        see == true &&
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item nav-link-s ml-4 font-nav-item">Inicio</Link>
                            <a href="#about" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Acerca De</span>
                            </a>
                            <a href="#treatment" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Tratamientos</span>
                            </a>
                            <a href="#location" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Ubicación</span>
                            </a>
                            <a href="#contact" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Contacto</span>
                            </a>
                        </div>
                    }

                    <div className="navbar-nav ml-auto">
                        <Link to="/login" className="nav-item nav-link-s ml-4 font-nav-item">Iniciar sesión</Link>
                        <Link to="/signup" className="nav-item ml-4 font-nav-item btn-login">Registrate</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar