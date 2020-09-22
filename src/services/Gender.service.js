import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllGender = () => {
    return axios(`${environment.apiUrl}gender`)
}