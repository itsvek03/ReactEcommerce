import { GET_CART, POST_CART, REMOVE_CART, LOADING, ERROR } from '../actions/cart/cart.type'


export const postCartReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CART:
            return { cartdata: action.payload, loading: false }
        case ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}


export const getCartReducer = (state = { cartdata: [] }, action) => {
    switch (action.type) {
        case LOADING: {
            return { loading: true, ...state }
        }
        case GET_CART:
            return { cartdata: action.payload, loading: false }
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}

export const deleteCartReducer = (state = {}, action) => {
    switch (action.type) {
        case LOADING: {
            return { loading: true }
        }
        case REMOVE_CART: {
            return { cartdata: action.payload, loading: false }
        }
        case ERROR: {
            return { error: action.payload, loading: false }
        }
        default:
            return state
    }
}


// const INITIAL_STATE = {
//     cartdata: []
// };

// export const postCartReducer = (state = INITIAL_STATE, action) => {
//     console.log("POST CART REDUCER", state, action.payload);
//     switch (action.type) {
//         case LOADING:
//             return { ...state, loading: true };
//         case POST_CART:
//             return { ...state, cartdata: CartUtility(state.cartdata, action.payload), loading: false };
//         case REMOVE_CART:
//             return {
//                 ...state,
//                 cartdata: state.cartdata.filter(data => data.item._id !== action.payload.item._id),
//                 loading: false
//             };
//         case ADD_QUANTITY:
//             return { ...state, loading: false, addquantity: AddQuantityUtilty(state.cartdata, action.payload) };
//         case REMOVE_QUANTITY:
//             return { ...state, loading: false, removequantity: RemoveQuantityUtilty(state.cartdata, action.payload) }
//         default:
//             return state;
//     }
// };

