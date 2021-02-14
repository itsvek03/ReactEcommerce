import {
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_SUCCESSID,
    CREATE_DETAILS_REQUEST,
    CREATE_DETAILS_SUCCESS,
    CREATE_DETAILS_FAIL,

    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS,
    ORDER_UPDATE_FAIL,


    ORDER_ADMIN_REQUEST,
    ORDER_ADMIN_SUCCESS,
    ORDER_ADMIN_FAIL

} from './order.type'
import { getAllOrdersapi, getOrdersbyid, postOrdersapi, UpdateOrdersApiAdmin, AllordersApi } from '../../api/ordershippingapi'
import Swal from 'sweetalert2';
import { history } from '../../shared//helper/history'
// ---------------------- GET ALL ORDERS -----------------

export const getOrdersBYIdAction = (orderid) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_DETAILS_REQUEST })
            const response = await getOrdersbyid(orderid);
            console.log("All Order ID Action", response)
            dispatch({
                type: ORDER_DETAILS_SUCCESSID,
                payload: response.data.data
            })
        }
        catch (error) {
            dispatch({
                type: ORDER_DETAILS_FAIL,
                payload: error.response
            })
        }
    }
}


//------------------------ UPDATE ORDERS TO BE PAID ----------------------
export const getAllOrdersAction = (orderid) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_DETAILS_REQUEST })
            const response = await getAllOrdersapi();
            console.log("All Order Action ", response)
            dispatch({
                type: ORDER_DETAILS_SUCCESS,
                payload: response.data.data
            })
        }
        catch (error) {
            dispatch({
                type: ORDER_DETAILS_FAIL,
                payload: error.response
            })
        }
    }
}

//------------------ POST ORDER -----------

export const postOrderAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_DETAILS_REQUEST })
            const response = await postOrdersapi(data);
            console.log("All Order Action", response)
            dispatch({
                type: CREATE_DETAILS_SUCCESS,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: `Payment Successfully`,
                icon: "success",
                timer: 2000,
            })
            history.push('/orders')
            window.location.reload();
        }
        catch (error) {
            dispatch({
                type: CREATE_DETAILS_FAIL,
                payload: error.response
            })
        }
    }
}

//----------------- GET ORDER ACTION ADMIN------------------
export const getOrdersAdmin = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_ADMIN_REQUEST })
            const response = await AllordersApi();
            console.log("All Order ID Action Admin", response)
            dispatch({
                type: ORDER_ADMIN_SUCCESS,
                payload: response.data.data
            })
        }
        catch (error) {
            dispatch({
                type: ORDER_ADMIN_FAIL,
                payload: error.response
            })
        }
    }
}


//-------------------- UPDATE ORDER ACTION ADMIN-----------------

export const UpdateOrderAdminAction = (id) => {
    return async (dispatch) => {
        try {
            console.log("ID ACTION", id)
            //dispatch({ type: ORDER_UPDATE_REQUEST })
            const response = await UpdateOrdersApiAdmin(id);
            console.log("Update Order Action", response)
            dispatch({
                type: ORDER_UPDATE_SUCCESS,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: `Delivered Successfully`,
                icon: "success",
                timer: 2000,
            })

        }
        catch (error) {
            dispatch({
                type: ORDER_UPDATE_FAIL,
                payload: error.response
            })
        }
    }
}