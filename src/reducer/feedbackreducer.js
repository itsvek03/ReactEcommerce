import { POST_FEEDBACK, ERROR, GET_FEEDBACK, DELETE_FEEDBACK } from '../actions/feedback/feedback.type'

export const postfeedreducer = (state = {}, action) => {
    switch (action.type) {
        case POST_FEEDBACK:
            return { message: action.payload }
        case ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}

export const getfeedreducer = (state = {}, action) => {
    switch (action.type) {
        case GET_FEEDBACK:
            return { message: action.payload }
        case ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}


export const deletefeedreducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_FEEDBACK:
            return { message: action.payload }
        case ERROR:
            return { error: action.payload }
        default:
            return state;
    }
}