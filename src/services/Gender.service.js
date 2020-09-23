import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllGender = () => {
    return axios(`${environment.apiUrl}gender`)
}

export const createGender = (gender) => {
    return axios.post(`${environment.apiUrl}gender`, gender)
}

export const updateGender = (gender) => {
    return axios.put(`${environment.apiUrl}gender/${gender.id}`, gender)
}

export const deleteGender = (gender) => {
    return axios({
        method: 'DELETE',
        url: `${environment.apiUrl}gender/${gender.id}`,
        data: gender
      })
}