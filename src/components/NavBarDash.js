import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './../styles/Navbar.css'
import './../styles/NavBarDash.css'

import logo from './../assets/logo.png'
import profile from './../assets/profile.jpg'

import { getContextUser, logout } from './../services/Authentication.service'

const NavBarDash = () =>{

    const { typeUser, person } = getContextUser();
    let history = useHistory();

    const handleLogout = () => {
        logout()
        history.push('/login')
    }
    return(
        <div>
            <nav className="navbar navbar-expand-md padding-navbar background background-color">
            <div className="container">
                <Link to="/main" className="navbar-brand">
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
                        typeUser == 'A' &&
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
                        <div className="dropdown">
                            <div class="container-profile-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                <div className="">
                                    <img src={profile} className="img-profile-nav"></img>
                                </div>
                                <p className="name-profile-nav ml-2">{person.name} {person.surname}</p>
                            </div>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Perfil</a>
                                <a class="dropdown-item" href="#">Mis Citas</a>
                                <button class="dropdown-item" onClick={handleLogout}>Cerrar sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default NavBarDash