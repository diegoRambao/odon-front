import React from 'react'

import phone from './../assets/phone.png'
import date from './../assets/date.png'
import money from './../assets/money.png'

import './../styles/Reason.css'

const Reason = () => {
    return(
        <section id="reason" className="section">
          <div className="container">
            <div className="row">
                <div className="col-md-6" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
                    <h2 className="title">Razones para elegirnos</h2>
                </div>
                <div className="col-md-6" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                    <p className="paragraph">Te ofrecemos tratamientos con tecnologías de punta y alianzas con recurso humano especializado para brindarte un servicio integral que cumpla con tus necesidades a un precio accesible.</p>
                </div>
            </div>
            <div className="row mt-5"  data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                    <div className="card-reason shadow">
                        <div className="container-img-card green-color">
                            <img src={phone} className="img-reason"/>
                        </div>
                        <h3 className="title-card-reason mt-3 mb-3">Equipo profesional y experimentado</h3>
                        <p className="mb-4">Nuestra mejor garant a es el trabajo de nuestros profesionales. Nuestros pacientes as  lo confirman.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                    <div className="card-reason shadow">
                        <div className="container-img-card blue-color">
                            <img src={date} className="img-reason"/>
                        </div>
                        <h3 className="title-card-reason mt-3 mb-3">Horarios y atención personalizada</h3>
                        <p className="mb-4">Abiertos de 7 a.m. a 8 p.m. Le permitimos elegir la hora y el día que mejor se adapte a su ritmo de vida.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                    <div className="card-reason shadow">
                        <div className="container-img-card orange-color">
                            <img src={money} className="img-reason"/>
                        </div>
                        <h3 className="title-card-reason mt-3 mb-3">Primera consulta y diagnóstico gratuito</h3>
                        <p className="mb-4">Radiografía panorámica y diagnóstico personalizado, gratis y sin compromiso.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Reason