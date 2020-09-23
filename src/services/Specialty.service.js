import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllSpecialty = () => {
    return axios(`${environment.apiUrl}specialty`)
}

export const createSpecialty = (specialty) => {
    return axios.post(`${environment.apiUrl}specialty`, specialty)
}

export const updateSpecialty = (specialty) => {
    return axios.put(`${environment.apiUrl}specialty/${specialty.id}`, specialty)
}

export const deleteSpecialty = (specialty) => {
    return axios({
        method: 'DELETE',
        url: `${environment.apiUrl}specialty/${specialty.id}`,
        data: specialty
      })
}