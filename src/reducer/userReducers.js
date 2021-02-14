import { USER_REGISTER, ERROR, LOGIN_USER, LOGGED_USER, UPDATE_ERROR, UPDATE_USER } from '../actions/user.type'


var INITIAL_STATE = () => {
    let user = JSON.parse(localStorage.getItem("currentuser"));
    return user ? { loggedUser: true, user } : {};
}



export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER:
            return { message: action.payload }
        case ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}




export const LoginReducer = (state = INITIAL_STATE(), action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { message: action.payload, loggedUser: false }
        case ERROR:
            return { message: action.payload, loggedUser: false }
        case LOGGED_USER:
            return { currentuserdata: action.payload, loggedUser: false }
        default:
            return state;
    }
}


export const UpdateLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return { data: action.payload, loggedUser: false }
        case UPDATE_ERROR:
            return { error: action.payload, loggedUser: false }
        default:
            return state;
    }
}
