import axios from 'axios'

import { environment } from './../utils/environment'

export const signUp = async(user) => {
    const res = await axios.post(`${environment.apiUrl}register`, user)
    return res.data
}

export const singIn = async(user) => {
    const res = await axios.post(`${environment.apiUrl}login`, user)
    localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
}

export const updateSession = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const logout = () => {
    localStorage.removeItem('user');
}

export const getContextUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

export const isLogin = () => {
    if(localStorage.getItem('user') != null ){
        return true
    }
    return false
}