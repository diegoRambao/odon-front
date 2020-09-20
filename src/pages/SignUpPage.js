import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../components/Navbar'

import './../styles/SignUp.css'

const SignUpPage = () => {
    return(
        <div className="register-main">
            <Navbar />
            <div className="register-view">
                <div className="register-container">
                    <div className="register-email">
                        <form>
                            <input
                                name="name"
                                id="register-name"
                                placeholder="Nombre Completo"
                                className="form-input-register"
                                type="text"
                            />
                            <input
                                name="email"
                                id="register-email"
                                placeholder="Corre electronico"
                                className="form-input-register"
                                type="text"
                            />
                            <input
                                name="password"
                                id="register-password"
                                placeholder="Crea tu contraseña"
                                className="form-input-register"
                                type="password"
                            />
                            <button className="button-register">Crear mi cuenta</button>
                        </form>
                    </div>

                    <div className="account-footer">
                        <div className="account-footer-create">
                            <span>¿Ya tienes cuenta?</span>
                        </div>
                        <div className="account-footer-link">
                            <Link to="/login" className="account-footer-btn">Inicia tu sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default SignUpPage