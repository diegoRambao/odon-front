import React from 'react'

import about from './../assets/about.png'
import './../styles/About.css'

const About = () => {
    return(
        <section id="about" className="section">
            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2 className="title mb-5">Acerde de Theeth</h2>
                        <p className="paragraph">Desde el 2002 somos una red privada de clínicas odontológicas con una gran trayectoria en el sector de la Salud Oral y la Ortodoncia.</p>
                            <p className="paragraph">Nos caracterizamos por tener un robusto Programa de Seguridad del Paciente, en el que tú puedes ser partícipe. ¡Conoce más al respecto! Para ello, haz click en cualquiera de los siguientes enlaces</p>
                            <p className="paragraph">Política Corporativa de Seguridad del Paciente Programa Cultura de Seguridad del Paciente, Derechos y Deberes del Paciente</p>
                            <p className="paragraph">Además, en virtud de la Circular externa 014 del 04 de octubre de 2016 de la SuperSalud, ponemos en conocimiento nuestra Información Contable y Financiera:</p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={about}
                            alt="Dentista Sonrriendo"
                            className="about-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About