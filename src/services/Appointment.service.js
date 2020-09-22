import axios from 'axios'

import { environment } from './../utils/environment'

export const getAppointmentUser = async(id, state = 0) => {
    return axios(`${environment.apiUrl}appointment_user/${id}/${state}`)
}

export const createAppointment = (appointment) => {
    return axios.post(`${environment.apiUrl}appointment`, appointment)
}

export const updateAppointment = (id, appointment) => {
    return axios.put(`${environment.apiUrl}appointment/${id}`, appointment)
}

export const deleteAppointment = (appointment) => {
    return axios({
        method: 'DELETE',
        url: `${environment.apiUrl}appointment/${appointment.id}`,
        data: appointment
      })
}