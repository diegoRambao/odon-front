import React from 'react'

import './../styles/Treatment.css'
import treatment1 from './../assets/tratamiento1.jpeg'
import treatment2 from './../assets/tratamiento2.jpg'
import treatment3 from './../assets/tratamiento3.jpeg'

const Treatment = () => {
    return(
        <div id="treatment">
            <div className="container">
                <h2 className="title-treatment mb-5">Tratamientos</h2>
                <div className="row mt-5">
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="card-treatment shadow-lg">
                            <img src={treatment1} className="img-card-treatment" alt="Tratamiento de ortoncia"/>
                            <div className="card-body-treatment">
                                <h3 className="title-card-treatment mt-3 mb-3">Ortodoncia</h3>
                                <p className="mb-4">Corrige la colocación de tus dientes y reduce problemas, conseguirás salud y estética.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="card-treatment shadow-lg">
                            <img src={treatment2} className="img-card-treatment" alt="Tratamiento de estetica dental"/>
                            <div className="card-body-treatment">
                                <h3 className="title-card-treatment mt-3 mb-3">Estética dental</h3>
                                <p className="mb-4">Actualmente, tener una buena sonrisa es sinónimo de salud y bienestar social. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 d-flex align-items-stretch">
                        <div className="card-treatment shadow-lg">
                            <img src={treatment3} className="img-card-treatment" alt="Tratamiento de implantes dentales"/>
                            <div className="card-body-treatment">
                                <h3 className="title-card-treatment mt-3 mb-3">Implantes dentales</h3>
                                <p className="mb-4">Disfrute de una dentadura sana y bonita desde solo $777.000, gracias a la implantología dental.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treatment