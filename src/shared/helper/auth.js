import { setCookie, removeCookie } from './Cooky'
import { getLocalStorage, removeLocalStorage } from './localStorage'

export const setAuthenticated = (token, user) => {
    setCookie('token', token)
    //setLocalStorage('currentuser', user)
}

export const isAuthenticated = () => {
    if (getLocalStorage('currentuser')) {
        return getLocalStorage('currentuser')
    } else {
        return false
    }
}

export const removetokenBased = (next) => {
    removeLocalStorage('user');
    removeCookie('token');

}