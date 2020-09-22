import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllDentist = () => {
    return axios(`${environment.apiUrl}dentist`)
}