import React from 'react'
import CardTotal from './../components/CardTotal'

const MainAd = () => {
    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-3">
                    <CardTotal title="Citas totales" number="12" icon="fa fa-medkit"/>
                </div>
                <div className="col-md-3">
                    <CardTotal title="Pacientes" number="50" icon="fa fa-users"/>
                </div>
                <div className="col-md-3">
                    <CardTotal title="Medicos" number="20" icon="fa fa-user-md"/>
                </div>
                <div className="col-md-3">
                    <CardTotal title="Especialidades" number="12" icon="fa fa-medkit"/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-7">
                    <div className="card shadow-sm">
                        <div className="header-card">
                            <div className="container-title">
                                <h3 className="title">Ultimas citas</h3>
                            </div>
                        </div>
                        <div className="body-card mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "50px"}}>#</th>
                                        <th scope="col">Paciente</th>
                                        <th scope="col">Dentista</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Diego Rambao</td>
                                        <td>Daniel Jimenez</td>
                                        <td>02/02/2020</td>
                                        <td>3:15 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card shadow-sm">
                        <div className="header-card">
                            <div className="container-title">
                                <h3 className="title">Ultimos Pacientes</h3>
                            </div>
                        </div>
                        <div className="body-card mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "50px"}}>#</th>
                                        <th scope="col">Paciente</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Telefono</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Diego Andres Rambao</td>
                                        <td>diego@gmail.com </td>
                                        <td>3003086333</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAd