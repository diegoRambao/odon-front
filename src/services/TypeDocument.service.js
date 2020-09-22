import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllTypeDocument = () => {
    return axios(`${environment.apiUrl}type_document`)
}