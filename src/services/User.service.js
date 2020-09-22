import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllUser = () => {
    return axios(`${environment.apiUrl}user`)
}
export const getUser = (id) => {
    return axios(`${environment.apiUrl}user/${id}`)
}