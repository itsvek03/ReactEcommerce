import { POST_REVIEW, ERROR } from '../reviews/reviews.type'
import { postreviewapi } from '../../api/reviewapi'
import { productInfoById } from '../product/product.action'
import Swal from 'sweetalert2';

export const postReviewAction = (data, id) => {
    return async (dispatch) => {
        try {
            var response = await postreviewapi(data);
            console.log("POST REVIEW ACTION", response);
            dispatch({
                type: POST_REVIEW,
                payload: response.data.data
            })
            Swal.fire({
                title: "Done!",
                text: "Thank you for the review",
                icon: "success",
                timer: 10000,
            })
            dispatch(productInfoById(id))
        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response
            })
        }

    }
}


// export const getReviewAction = (productid) => {
//     return async (dispatch) => {
//         try {
//             var response = await getreviewapi(productid);
//             console.log("GET REVIEW", response);
//             dispatch({
//                 type: GET_REVIEW,
//                 payload: response.data.data
//             })
//         }
//         catch (error) {
//             dispatch({
//                 type: ERROR,
//                 payload: error.response
//             })
//         }

//     }
// }