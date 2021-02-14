import { GET_CAT, UPDATE_CAT, DELETE_CAT, ERROR, POST_CAT } from './category.type'
import { getCatapi, postCatapi, updateCatapi, deleteCatapi } from '../../api/categoryapi'
import Swal from 'sweetalert2';


//GET 
export const getCatActions = () => {
    return async (dispatch) => {
        try {
            const response = await getCatapi();
            console.log("Category", response)
            dispatch({
                type: GET_CAT,
                payload: response.data.data
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
export const deleteCatActions = (id) => {
    return async (dispatch) => {
        try {
            const response = await deleteCatapi(id);
            console.log("Category DELETE", response)
            dispatch({
                type: DELETE_CAT,
                payload: response.data
            })
            Swal.fire({
                title: "Done!",
                text: `Deleted Successfully`,
                icon: "success",
                timer: 2000,
            })
            dispatch(getCatActions())

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
export const UpdateCatActions = (id, data) => {
    return async (dispatch) => {
        try {
            const response = await updateCatapi(id, data);
            console.log("SUBCategory Update", response)
            dispatch({
                type: UPDATE_CAT,
                payload: response.data
            })
            dispatch(getCatActions())
            Swal.fire({
                title: "Done!",
                text: `Updated Successfully`,
                icon: "success",
                timer: 2000,
            })

        }
        catch (error) {
            console.log(error)
            dispatch({
                type: ERROR,
                payload: error.response
            })

        }
    }
}


//Post
export const postCatActions = (data) => {
    return async (dispatch) => {
        try {
            console.log("POST SUBCATEGORY ACTIONS", data)
            const response = await postCatapi(data);
            console.log("Category", response)
            dispatch({
                type: POST_CAT,
                payload: response.data
            })
            dispatch(getCatActions())
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