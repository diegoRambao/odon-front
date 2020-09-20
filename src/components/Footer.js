import React from 'react'

import facebook from './../assets/facebook.png'
import twitter from './../assets/twitter.png'
import instagram from './../assets/instagram.png'
import linkedin from './../assets/linkedin.png'

import './../styles/Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                        <div className="col-md-5 mt-3">
                            <h3>Acerca De</h3>
                            <p  className="paragraph mt-4">Teeth es una clínica dental moderna en el bullicioso suburbio oriental de Blackburn, Victoria. Nuestra misión es brindarle a usted y a su familia atención dental de calidad y ayudarlo a mantener sus sonrisas saludables de por vida.</p>
                            <p>Dicen que haces lo mejor cuando pones tu corazón en ello. En Teeth, tenemos sus mejores intereses en mente. Todo lo que decimos y hacemos es por una razón; y esa razón es un auto para pacientes de primera clasee.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Contactanos</h3>
                            <p className="paragraph mt-4 mt-4"> Ubicación
                                Calle 39 # 27 - 100 Bodega 13.
                                Centro Industrial Almendra.
                                Barranquilla - Atlántico, Colombia.

                                Teléfono
                                +57 304 369 9198</p>
                        </div>
                        <div className="col-md-3 mt-4">
                            <h3>Siguenos</h3>
                            <div className="footer-icons mt-4">
                                    <img src={facebook} className="icons-img" alt="icono de facebook"/>
                                    <img src={twitter} className="icons-img" alt="icono de twitter"/>
                                    <img src={instagram} className="icons-img" alt="icono de instagram"/>
                                    <img src={linkedin} className="icons-img" alt="icono de linkedin"/>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer