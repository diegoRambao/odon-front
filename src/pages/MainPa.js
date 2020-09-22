import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate, formatHour, formatHourDate} from './../utils/parser'

import { getContextUser } from './../services/Authentication.service'
import { getAppointmentUser, createAppointment, updateAppointment, deleteAppointment } from './../services/Appointment.service'
import { getAllDentist } from './../services/Dentist.service'

const appointmentInterface = {
    id: null,
    date: '',
    hour: '',
    dentist: {},
    user: {}
}

const MainPa = () => {

    const user = getContextUser()
    const [appointments, setAppointments] = useState([])
    const [appAttended, setAppAttended] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [dentists, setDentists] = useState(false)
    const [appointment, setAppointment] = useState(appointmentInterface)

    useEffect(() => {
        getAppointmentUser(user.id).then(({data}) => { setAppointments(data)})
        getAppointmentUser(user.id, 1).then(({data}) => { setAppAttended(data)})
        getAllDentist().then(({data}) => setDentists(data))
    }, [])

    const handleChange = (e) => {
        setAppointment({...appointment,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeDentist = (e) => {
        setAppointment({...appointment,
            dentist: {
                id: e.target.value
            }
        })
    }
    const modifyAppointment = (data) => {
        console.log(data)
        setShowCard(!showCard)
        setAppointment(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        appointment.user = user
        if(!appointment.id) {
            createAppointment(appointment).then(({data}) => {
                getAppointmentUser(user.id).then(({data}) => { setAppointments(data)})
                setShowCard(!showCard)
            })
        }else{
            updateAppointment(appointment.id, appointment).then(({data}) => {
                getAppointmentUser(user.id).then(({data}) => { setAppointments(data)})
                setShowCard(!showCard)
            })
        }
    }

    const handleDelete = (data) => {
        if (window.confirm(`¿Estas seguro que quieres eliminar la cita?`)) {
            deleteAppointment(data).then((res) => {
                getAppointmentUser(user.id).then(({data}) => { setAppointments(data)})
            })
        }
    }

    const handleNew = () => {
        setAppointment(appointmentInterface)
        setShowCard(!showCard)
    }

    return(
        <div className="row mt-5">
            <div className="col-md-6 mb-4">
            {
                !showCard&&
                <div className="card shadow-sm">
                    <div className="header-card">
                        <div className="container-title">
                            <h3 className="title">Citas Sin Atender</h3>
                        </div>
                        <div className="container-action">
                            <button className="btn-primary-d" onClick={handleNew}> <i className="fa fa-plus mr-1"></i> Nuevo</button>
                        </div>
                    </div>
                    <div className="body-card mt-3">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Dentista</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Hora</th>
                                        <th scope="col" style={{width: "84px"}}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {appointments?
                                    appointments.map((item) => {
                                        return(
                                            <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.dentist.person.name} {item.dentist.person.surname}</td>
                                                <td><Moment format="YYYY/MM/DD">{item.date}</Moment></td>
                                                <td>{item.hour}</td>
                                                <td style={{width: "84px"}}>
                                                    <a className="mr-2" onClick= {() => modifyAppointment(item)}>
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a className="mr-2" onClick={() => handleDelete(item)}>
                                                        <i className="fa fa-trash-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    }) :
                                    <td colSpan="5"><h5 className="text-center">No hay citas sin atender</h5></td>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
            {
                showCard&&
                <div className="card shadow-sm">
                    <div className="header-card">
                        <div className="container-title">
                                <h3 className="title">Nueva Cita</h3>
                        </div>
                        <div className="container-action">
                            <button className="btn-primary-d" onClick={handleNew}><i class="far fa-times-circle"></i></button>
                        </div>
                    </div>
                    <div className="body-card mt-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="col">
                                    <label>Fecha</label>
                                    <DatePicker dateFormat="dd/MM/yyyy" className="form-control" value={formatDate(appointment.date, '/') || ''} onChange={date => setAppointment({...appointment, date: formatDate(date, '-')})} name="date" required/>
                                </div>
                                <div className="col">
                                    <label>Hora</label>
                                    <DatePicker
                                        value={formatHour(appointment.hour) || ''}
                                        onChange={date => setAppointment({...appointment, hour: formatHourDate(date)})}
                                        showTimeSelect
                                        required
                                        showTimeSelectOnly
                                        className="form-control"
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Dentista</label>
                                <select required className="form-control" id="" value={appointment.dentist.id} name="dentist" onChange={handleChangeDentist}>
                                {dentists.map((dentist) => {
                                    return <option value={dentist.id} key={dentist.id}>{dentist.person.name} {dentist.person.surname} {dentist.person.second_surname || ''}</option>
                                })}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Observación</label>
                                <textarea value={appointment.note} type="text" className="form-control" name="note" onChange={handleChange} name="note"></textarea>
                            </div>
                            <button className="btn-primary-d" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            }
            </div>
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="header-card">
                        <div className="container-title">
                            <h3 className="title">Citas Atendidas</h3>
                        </div>
                    </div>
                    <div className="body-card">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Dentista</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Hora</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appAttended?
                                            appAttended.map((item) => {
                                            return(
                                                <tr key={item.id}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.dentist.person.name} {item.dentist.person.surname}</td>
                                                    <td><Moment format="YYYY/MM/DD">{item.date}</Moment></td>
                                                    <td>{item.hour}</td>
                                                </tr>
                                            )
                                        }) :
                                        <td colSpan="5"><h5 className="text-center">No hay citas Atendidas</h5></td>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MainPa