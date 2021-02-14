import { GET_PRODUCT, ERROR, GET_PRODUCTID, LOADING, POST_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './product.type'
import { getProduct, getProductbyId, deleteProductId, UpdateProduct, postproductapi } from '../../api/productapi'
import Swal from 'sweetalert2';

export const productInfo = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING });
            if (!data) {
                var response = await getProduct();
                //console.log("PRODUCT ACTION", response)
                setTimeout(() => {
                    dispatch({
                        type: GET_PRODUCT,
                        payload: response.data.data,
                    })
                }, 1000)
            }
            else {
                var response = await getProduct(data);
                //console.log("PRODUCT ACTION", response)

                dispatch({
                    type: GET_PRODUCT,
                    payload: response.data.data,
                })

            }


        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}

export const productInfoById = (id) => {
    return async (dispatch) => {
        try {
            // dispatch({ type: LOADING });
            var response = await getProductbyId(id);
            console.log("PRODUCT ACTION BY ID", response)
            setTimeout(() => {
                dispatch({
                    type: GET_PRODUCTID,
                    payload: response.data.data,
                })
            }, 1000)

        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}


export const postProductAction = (data) => {
    return async (dispatch) => {
        try {

            var response = await postproductapi(data);
            console.log("PRODUCT ACTION DATE", response)
            setTimeout(() => {
                dispatch({
                    type: POST_PRODUCT,
                    payload: response.data,
                })
            }, 1000)
            Swal.fire({
                title: "Done!",
                text: `Added Successfully`,
                icon: "success",
                timer: 2000,
            })

        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}


export const UpdateProductAction = (id, data) => {
    return async (dispatch) => {
        try {
            //dispatch({ type: LOADING });
            var response = await UpdateProduct(id, data);
            console.log("PRODUCT ACTION BY ID", response)
            setTimeout(() => {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: response.data.data,
                })
            }, 1000)
            Swal.fire({
                title: "Done!",
                text: `Updated Successfully`,
                icon: "success",
                timer: 2000,
            })
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}


export const DeleteProductAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING });
            var response = await deleteProductId(id);
            console.log("PRODUCT ACTION BY ID", response)
            setTimeout(() => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: response.data,
                })
            }, 1000)
            Swal.fire({
                title: "Done!",
                text: `Deleted Successfully`,
                icon: "success",
                timer: 2000,
            })
            dispatch(productInfo());

        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}