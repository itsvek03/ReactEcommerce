import { FORGOT_PASS, LOADING, RESET_PASS, ERROR } from './forgot.type'
import { forgotpassapi, resetpassapi } from '../../api/forgotpasswordapi'
import Swal from 'sweetalert2';

export const forgotPasswordActions = (data) => {
    return async (dispatch) => {
        try {
            const response = await forgotpassapi(data);
            console.log("FORGOT ACTIONS", response)
            dispatch({
                type: FORGOT_PASS,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: response.data.message,
                icon: "success",
                timer: 2000,
                customClass: 'slow-animation'
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
            console.log("ERROR", error.response)
            Swal.fire({
                title: "Oops....!",
                text: "Something went wrong",
                //text: error.response.data.message,
                icon: "error",
                timer: 2000,

            })
        }

    }
}


export const ResetPasswordActions = (token, data) => {
    return async (dispatch) => {
        try {
            const response = await resetpassapi(token, data);
            console.log("RESET ACTIONS", response)
            dispatch({
                type: RESET_PASS,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: "Password Updated Successfully",
                icon: "success",
                timer: 2000,
                customClass: 'slow-animation'
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
            console.log("ERROR", error.response)
            Swal.fire({
                title: "Oops....!",
                text: "Something went wrong",
                //text: error.response.data.message,
                icon: "error",
                timer: 2000,

            })
        }

    }
}
