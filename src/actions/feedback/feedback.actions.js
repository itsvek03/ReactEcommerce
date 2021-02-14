import { POST_FEEDBACK, ERROR, GET_FEEDBACK, DELETE_FEEDBACK } from '../feedback/feedback.type'
import { postfeedbacks, deletefeedbacks, getfeedbacks } from '../../api/feedbackapi'
import Swal from 'sweetalert2';



export const postfedbackAction = (data) => {
    return async (dispatch) => {
        try {
            var response = await postfeedbacks(data);
            console.log("FEEDBACK RESPONSE", response)
            dispatch({
                type: POST_FEEDBACK,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                html:
                    `${response.data.data.data.Name}`.toUpperCase() +
                    '<br/>' +
                    '<strong>Thank you for giving your feedback</strong> ',
                icon: "success",
                timer: 2000,

            })
        }
        catch (error) {
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


export const deletefeeedbackAction = (id) => {
    return async (dispatch) => {
        try {
            console.log("FEEDBACk id", id);
            const response = await deletefeedbacks(id);
            dispatch({
                type: DELETE_FEEDBACK,
                payload: response.status
            })
            dispatch(getfeedbackActions())
            Swal.fire({
                title: "Done!",
                text: "Deleted Successfully",
                icon: "success",
                timer: 2000,

            })
        } catch (error) {
            console.log("FEEDBACk ERROr", error)
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }
    }
}


export const getfeedbackActions = () => {
    return async (dispatch) => {
        try {
            const response = await getfeedbacks();
            console.log("FEEDBACK", response.message);
            dispatch({
                type: GET_FEEDBACK,
                payload: response.data.data
            })
        }
        catch (error) {
            console.log("FEEDBACk ERROr", error)
            dispatch({
                type: GET_FEEDBACK,
                payload: error.message
            })
        }
    }
}