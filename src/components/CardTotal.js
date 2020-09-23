import React from 'react'
import './../styles/CardTotal.css'

const CardTotal = ({number, title, icon}) => {
    return(
        <div className="card-total shadow">
            <p className="title">{title}</p>
            <div className="content-card-total">
                <p className="number">{number}</p>
                <div className="icon">
                    <i className={icon}></i>
                </div>
            </div>
        </div>
    )
}

export default CardTotal