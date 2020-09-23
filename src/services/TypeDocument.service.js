import axios from 'axios'

import { environment } from './../utils/environment'

export const getAllTypeDocument = () => {
    return axios(`${environment.apiUrl}type_document`)
}

export const createTypeDocument = (typeDocument) => {
    return axios.post(`${environment.apiUrl}type_document`, typeDocument)
}

export const updateTypeDocument = (typeDocument) => {
    return axios.put(`${environment.apiUrl}type_document/${typeDocument.id}`, typeDocument)
}

export const deleteTypeDocument = (typeDocument) => {
    return axios({
        method: 'DELETE',
        url: `${environment.apiUrl}type_document/${typeDocument.id}`,
        data: typeDocument
      })
}