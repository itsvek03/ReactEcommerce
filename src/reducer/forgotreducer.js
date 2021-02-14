import { FORGOT_PASS, LOADING, RESET_PASS, ERROR } from '../../src/actions/forgot/forgot.type'

export const forgotpassReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGOT_PASS:
            return {
                data: action.payload
            }
        case ERROR:
            return { error: action.payload }
        default:
            return state
    }
}

export const ResetpassReducer = (state = {}, action) => {
    switch (action.type) {
        case RESET_PASS:
            return {
                data: action.payload
            }
        case ERROR:
            return { error: action.payload }
        default:
            return state
    }
}