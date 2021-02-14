import { GET_CAT, UPDATE_CAT, DELETE_CAT, ERROR, POST_CAT } from '../actions/category/category.type'


export const getCatreducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}

export const postCatreducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}


export const updateCatreducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CAT:
            return { ...state, data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}




export const delCatreducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_CAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}
