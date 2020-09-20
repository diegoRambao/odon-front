import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../components/Navbar'
import { Redirect } from "react-router-dom";

import './../styles/LoginPage.css'

import { singIn } from './../services/Authentication.service'

const LoginPage = ({history}) => {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        singIn(form).then((user) => {
            if(user){
                history.push('/main')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="login-main">
             <Navbar />
            <div className="login-view">
                <div className="login-container">
                    <div className="login-email">
                        <h4 className="login-title">Iniciar sesión</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                id="login-email"
                                placeholder="Tu email"
                                className="form-input-login"
                                type="text"
                                value={form.email || ''}
                                onChange={handleChange}
                            />
                            <input
                                name="password"
                                id="login-password"
                                placeholder="Tu contraseña"
                                className="form-input-login"
                                type="password"
                                value={form.password || ''}
                                onChange={handleChange}
                            />
                            <button className="button-login">Iniciar sesión</button>
                            <div className="login-lostpassword">
                                <a href="#olvidaste tu contraseña">¿Olvidaste tu contraseña?</a>
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