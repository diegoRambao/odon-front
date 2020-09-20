import React from 'react'
import Iframe from 'react-iframe'

import './../styles/Location.css'

const Location = () => {
    return(
        <div id="location">
            <div className="container">
                <div className="container-title-location mb-5">
                    <h2 className="title-treatment">Nosotros estamos ubicados en el corazón de barranquilla</h2>
                    <p>220 Adelaide St W, Colombia, ON M5H 1W7</p>
                </div>
            </div>
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.4643827003188!2d-74.78689164210608!3d10.968749498047798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d59848654eb%3A0xf43cedf1828002a!2sCl.+39+%2327-100%2C+Barranquilla%2C+Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1540447901801"
                frameBorder="0"
                className="width-100"
            />
        </div>
    )
}

export default Location