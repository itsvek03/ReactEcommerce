import { postcart, getcart, deletecart } from '../../api/cartapi'
import { GET_CART, POST_CART, REMOVE_CART, LOADING } from '../../actions/cart/cart.type'
import { ERROR } from '../user.type';
import Swal from 'sweetalert2';

export const postcartAction = (data, productid, userid, showAlert = true) => {
    console.log("POST CART ACTIONS----", data, productid)
    return async (dispatch) => {
        try {
            var response = await postcart(data, productid);
            console.log("CART ACTIONS", response);
            dispatch({
                type: POST_CART,
                payload: response.data.message
            })
            if (showAlert) {
                Swal.fire({
                    title: "Status",
                    text: "Cart Added Successfully",
                    icon: "success",
                    timer: 2000
                })
            }
            dispatch(getCartActions(userid))
        }
        catch (error) {
            console.log("cart", error.response)
            dispatch({
                type: ERROR,
                payload: error.response.data.message
            })
            Swal.fire({
                title: "Oops....!",
                text: error.response.data.message,
                icon: "error",
            })
        }
    }
}


export const getCartActions = (userid) => {
    return async (dispatch) => {
        try {
            const response = await getcart(userid);
            console.log("GET CART", response)
            dispatch({
                type: GET_CART,
                payload: response.data.data
            })
        }
        catch (error) {
            console.log("erroe", error)
            dispatch({
                type: ERROR,
                payload: error.response.data
            })
        }
    }

}


export const RemoveToCartAction = (id, userid) => {
    console.log("Remove ID", id);
    return async dispatch => {
        try {
            dispatch({ type: LOADING });
            let response = await deletecart(id);
            console.log(response)
            setTimeout(() => {
                dispatch({ type: REMOVE_CART, payload: response.data });
            }, 1000);
            dispatch(getCartActions(userid))
        }
        catch (error) {
            console.log("delete error", error)
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }
    }
};


