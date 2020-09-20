import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../components/Navbar'

import './../styles/LoginPage.css'

const LoginPage = () => {
    return(
        <div className="login-main">
             <Navbar />
            <div className="login-view">
                <div className="login-container">
                    <div className="login-email">
                        <h4 className="login-title">Iniciar sesión</h4>
                        <form>
                            <input
                                name="email"
                                id="login-email"
                                placeholder="Tu email"
                                className="form-input-login"
                                type="text"
                            />
                            <input
                                name="password"
                                id="login-password"
                                placeholder="Tu contraseña"
                                className="form-input-login"
                                type="password"
                            />
                            <button className="button-login">Iniciar sesión</button>
                            <div className="login-lostpassword">
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                        </form>
                    </div>

                    <div className="account-footer">
                        <div className="account-footer-create">
                            <span>¿Aún no tienes cuenta en Theeth?</span>
                        </div>
                        <div className="account-footer-link">
                            <Link to="/signup" className="account-footer-btn">Registrate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default LoginPage