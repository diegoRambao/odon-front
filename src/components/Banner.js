import React from 'react'

import './../styles/Banner.css'
import medic1 from './../assets/medic1.png'

const Banner = () => {
    return(
        <div className="banner">
            <div className="container">
                <div className="row align-items-center justify-content-center" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                 <div className="col-md-5 d-sm-none d-md-block d-none">
                        <img
                            src={medic1}
                            alt="logo de Adevolver"
                            className="img-background"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                        />
                    </div>
                    <div className="col-md-7 mt-5">
                        <h1 className="title-header">Somos los mejores en servicios de ortodoncias</h1>
                        <p className="paragraph-title mb-4 mt-4">Gracias a los excelentes resultados de nuestros tratamientos, contamos con millones de pacientes satisfechos, felices y orgullosos con su nueva sonrisa.</p>
                        <div>
                            <a className="btn-primary mr-2 mb-2" href="#treatment">Tratamientos</a>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Banner