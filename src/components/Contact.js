import React from 'react'

import './../styles/Contact.css'
import icPhone from './../assets/ic_phone.svg'
import icBuoy from './../assets/ic_buoy_orange.svg'
import icSuitcase from './../assets/ic_suitcase.svg'

const Contact = () => {
    return(
        <div id="contact">
            <div className="container">
                <div className="container-title-contact mb-5">
                    <h2 className="title-contact">Contactenos</h2>
                    <p className="paragraph-contact">Preguntas? ¡Estamos aquí para ayudarlo a encontrar a la persona adecuada para comunicarse!</p>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card-contact">
                                <img src={icPhone} className="Phone"/>
                                <h3 className="title-card-contact mt-3 mb-3">Equipo profesional y experimentado</h3>
                                <p className="mb-4 paragraph-contact">¡El equipo de soporte de Theeth está aquí para ayudar! Abra un chat o envíe un correo electrónico a <a href="#">support@theeth.com</a> .</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card-contact">
                                <img src={icBuoy} className="Phone"/>
                                <h3 className="title-card-contact mt-3 mb-3">Centro de ayuda</h3>
                                <p className="mb-4 paragraph-contact">Obtenga sugerencias y respuestas rápidas sobre el uso de Looka para diseñar un logotipo y generar activos de marca.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex align-items-stretch">
                            <div className="card-contact">
                                <img src={icSuitcase} className="Phone"/>
                                <h3 className="title-card-contact mt-3 mb-3">Carreras</h3>
                                <p className="mb-4 paragraph-contact">Únase a una empresa de rápido crecimiento apasionada por el diseño y la tecnología.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact