import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../components/Navbar'
import { User } from './../models/User'

import { signUp } from './../services/Authentication.service'

import './../styles/SignUp.css'

const SignUpPage = () => {

    const [form, setForm] = useState(new User())

    const handleChange = (e) => {
        setForm({...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangePerson = (e) => {
        setForm({...form,
            person: {
                ...form.person,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(form).then((res)=>{
            if(res){
                alert('!Usuario registrado!')
            }
            setForm(new User())
        }).catch((error)=> {
            console.log(error)
        })
    }

    return(
        <div className="register-main">
            <Navbar />
            <div className="register-view">
                <div className="register-container">
                    <div className="register-email">
                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                id="register-name"
                                placeholder="Nombres"
                                className="form-input-register"
                                type="text"
                                onChange={handleChangePerson}
                                value={form.person.name || ''}
                                required
                            />
                            <input
                                name="surname"
                                id="register-surname"
                                placeholder="Apellidos"
                                className="form-input-register"
                                type="text"
                                onChange={handleChangePerson}
                                value={form.person.surname || ''}
                                required
                            />
                            <input
                                name="documentNumber"
                                id="register-document-number"
                                placeholder="Numero de documento"
                                className="form-input-register"
                                type="text"
                                onChange={handleChangePerson}
                                value={form.person.documentNumber || ''}
                                required
                            />
                            <input
                                name="email"
                                id="register-email"
                                placeholder="Corre electronico"
                                className="form-input-register"
                                type="email"
                                onChange={handleChangePerson}
                                value={form.person.email || ''}
                                required
                            />
                            <input
                                name="password"
                                id="register-password"
                                placeholder="Crea tu contraseña"
                                className="form-input-register"
                                type="password"
                                onChange={handleChange}
                                value={form.password || ''}
                                required
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