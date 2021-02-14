import { GET_PRODUCT, ERROR, GET_PRODUCTID, LOADING, POST_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/product/product.type'


export const ShowProductDetails = (state = [], action) => {
    switch (action.type) {
        case LOADING:
            return ({ loading: true })
        case GET_PRODUCT:
            return { ...state, item: action.payload, loading: false };
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
};

export const ShowProductDetailsId = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return ({ loading: true })
        case GET_PRODUCTID:
            return { ...state, item: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export const PostProductReducer = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return ({ loading: true })
        case POST_PRODUCT:
            return { ...state, item: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export const UpdateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return ({ loading: true })
        case UPDATE_PRODUCT:
            return { ...state, item: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export const DeleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case LOADING:
            return ({ loading: true })
        case DELETE_PRODUCT:
            return { ...state, item: action.payload, loading: false };
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};