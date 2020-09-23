import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ImgProfile from './../components/ImgProfile'

import './../styles/Navbar.css'
import './../styles/NavBarDash.css'

import logo from './../assets/logo.png'
import { environment } from './../utils/environment'

import { getContextUser, logout } from './../services/Authentication.service'

const NavBarDash = () =>{

    const { person, typeUser} = getContextUser();
    const user = getContextUser();
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
                        typeUser === 'A' &&
                        <div className="navbar-nav ml-auto">
                            <Link to="/main" className="nav-item nav-link-s ml-4 font-nav-item">Inicio</Link>
                            <a href="#treatment" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Citas</span>
                            </a>
                            <a href="#location" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Doctores</span>
                            </a>
                            <a href="#location" className="nav-item nav-link-s ml-4 font-nav-item">
                                <span>Pacientes</span>
                            </a>
                            <li className="nav-item dropdown ml-4 font-nav-item">
                                <a className="nav-item dropdown-toggle" href="#" id="configuration" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Configuracion
                                </a>
                                <div className="dropdown-menu shadow" aria-labelledby="configuration">
                                    <Link to="/gender" className="dropdown-item nav-item">Generos</Link>
                                    <Link to="/specialty" className="dropdown-item nav-item">Especialidades</Link>
                                    <Link to="/type_document" className="dropdown-item nav-item">Tipos de documentos</Link>
                                </div>
                            </li>
                        </div>
                    }
                    <div className="navbar-nav ml-auto">
                        <div className="dropdown">
                            <div className="container-profile-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                <div className="">
                                    <ImgProfile user={user} width="40px" height="40px"/>
                                </div>
                                <p className="name-profile-nav ml-2">{person.name} {person.surname}</p>
                                <i className="fas fa-chevron-down ml-2"></i>
                            </div>
                            <div className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton">
                                <Link to="/profile" className="dropdown-item">Perfil</Link>
                                {typeUser === 'P' && <Link to="/main" className="dropdown-item">Mis citas</Link>}
                                <div className="dropdown-divider"></div>
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