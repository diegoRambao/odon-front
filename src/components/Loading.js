import React from 'react'
import loadingImg from './../assets/loading.png'

const Loading = () => {
    return(
        <div className="text-center"><img src={loadingImg} className="loadingImg-sm" alt="cargando..."/></div>
    )
}

export default Loading