import { GET_SUBCAT, UPDATE_SUBCAT, DELETE_SUBCAT, ERROR, POST_SUBCAT } from './subcategory.type'
import { getSubCatapi, postSubCatapi, updatesubapi, deletesubapi } from '../../api/getSubcategory'
import Swal from 'sweetalert2';


//GET 
export const getSubCatActions = () => {
    return async (dispatch) => {
        try {
            const response = await getSubCatapi();
            console.log("SUBCategory", response)
            dispatch({
                type: GET_SUBCAT,
                payload: response.data.data.getdata
            })
        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }
    }
}



//DELETE
export const deleteSubCatActions = (id) => {
    return async (dispatch) => {
        try {
            const response = await deletesubapi(id);
            console.log("SUBCategory DELETE", response)
            dispatch({
                type: DELETE_SUBCAT,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: `Deleted Successfully`,
                icon: "success",
                timer: 2000,
            })
            dispatch(getSubCatActions())

        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }
    }
}


//Update
export const UpdateSubCatActions = (id, data) => {
    return async (dispatch) => {
        try {
            const response = await updatesubapi(id, data);
            console.log("SUBCategory Update", response)
            dispatch({
                type: UPDATE_SUBCAT,
                payload: response.data
            })
            dispatch(getSubCatActions())
            Swal.fire({
                title: "Done!",
                text: `Updated Successfully`,
                icon: "success",
                timer: 2000,
            })
        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
            Swal.fire({
                title: "Done!",
                text: `Updated Successfully`,
                icon: "success",
                timer: 2000,
            })
        }
    }
}


//Post
export const postSubCatActions = (data) => {
    return async (dispatch) => {
        try {
            console.log("POST SUBCATEGORY ACTIONS", data)
            const response = await postSubCatapi(data);
            console.log("SUBCategory", response)
            dispatch({
                type: POST_SUBCAT,
                payload: response.data
            })
            dispatch(getSubCatActions())
            Swal.fire({
                title: "Done!",
                text: `Added Successfully`,
                icon: "success",
                timer: 2000,
            })
        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }
    }
}