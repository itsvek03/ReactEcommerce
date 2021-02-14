import {
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_SUCCESSID,
    CREATE_DETAILS_REQUEST,
    CREATE_DETAILS_SUCCESS,
    CREATE_DETAILS_FAIL, CREATE_DETAILS_RESET,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,
    ORDER_ADMIN_REQUEST,
    ORDER_ADMIN_SUCCESS,
    ORDER_ADMIN_FAIL,
    ORDER_ADMIN_RESET,
    ORDER_UPDATE_RESET

} from '../actions/ordershipping/order.type.js'

export const getOrderByIdReducer = (state = { orderdataId: { loading: true, orderitems: [], shippingAddress: {}, products: [] }, orderdata: [] }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                orderdata: action.payload
            }

        case ORDER_DETAILS_SUCCESSID:
            return {
                ...state,
                loading: false,
                orderdataId: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// ----------- post order reducer-----------

export const postOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_DETAILS_REQUEST:
            return { loading: true }

        case CREATE_DETAILS_SUCCESS:
            return {
                loading: false,
                success: true,
                orderdata: action.payload
            }
        case CREATE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CREATE_DETAILS_RESET:
            return {}
        default:
            return state
    }
}

//------------------------ UPDATE ADMIN REDUCER ----------------
export const UpdateAdminReducer = (state = { loading: true, orderitems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return { ...state, loading: true }

        case ORDER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }

        case ORDER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ORDER_UPDATE_RESET:
            return {}
        default:
            return state
    }
}



// ====================== GET ADMIN REDUCER =============

export const getOrderByIdAdminReducer = (state = { loading: true, orderitems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        case ORDER_ADMIN_REQUEST:
            return { ...state, loading: true }

        case ORDER_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                orderdata: action.payload
            }
        case ORDER_ADMIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ORDER_ADMIN_RESET:
            return {}
        default:
            return state
    }
}

