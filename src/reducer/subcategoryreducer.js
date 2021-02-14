import { GET_SUBCAT, UPDATE_SUBCAT, DELETE_SUBCAT, ERROR, POST_SUBCAT } from '../actions/subcategory/subcategory.type'


export const getSubCatreducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SUBCAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}

export const postSubCatreducer = (state = {}, action) => {
    switch (action.type) {
        case POST_SUBCAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}


export const updateSubCatreducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SUBCAT:
            return { ...state, data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}




export const delSubCatreducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SUBCAT:
            return { data: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}
