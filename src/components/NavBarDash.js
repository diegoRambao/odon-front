import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './../styles/Navbar.css'
import './../styles/NavBarDash.css'

import logo from './../assets/logo.png'
import { environment } from './../utils/environment'

import { getContextUser, logout, singIn } from './../services/Authentication.service'

const NavBarDash = () =>{

    const { person, typeUser} = getContextUser();
    let history = useHistory();
    const profile = `${environment.urlFile}${person.imgUrl}`

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
                        typeUser === 'A' &&
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
                            <div className="container-profile-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                <div className="">
                                    <img src={profile} className="img-profile-nav" alt="Imagen de perfil"></img>
                                </div>
                                <p className="name-profile-nav ml-2">{person.name} {person.surname}</p>
                            </div>
                            <div className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton">
                                <Link to="/profile" className="dropdown-item">Perfil</Link>
                                <Link to="/main" className="dropdown-item">Mis citas</Link>
                                <button className="dropdown-item" onClick={handleLogout}>Cerrar sesión</button>
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