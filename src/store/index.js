import { combineReducers } from "redux";
import { userRegisterReducer, LoginReducer } from '../reducer/userReducers'
import { ShowProductDetails, ShowProductDetailsId, UpdateProductReducer, DeleteProductReducer, PostProductReducer } from '../reducer/productReducer'
import { postfeedreducer, getfeedreducer, deletefeedreducer } from '../reducer/feedbackreducer'
import { postCartReducer, getCartReducer, deleteCartReducer } from '../reducer/cartreducer'
import { postReviewReducer } from '../reducer/reviewReducer'
import { getSubCatreducer, postSubCatreducer, updateSubCatreducer, delSubCatreducer } from '../reducer/subcategoryreducer'
import { getCatreducer, postCatreducer, updateCatreducer, delCatreducer } from '../reducer/categoryreducer'
import { forgotpassReducer, ResetpassReducer } from '../reducer/forgotreducer'
import { getOrderByIdReducer, postOrderReducer, UpdateAdminReducer, getOrderByIdAdminReducer } from '../reducer/orderreducer'


const reducers = combineReducers(
    {
        userlogindata: userRegisterReducer,
        loginuserdata: LoginReducer,

        postfeedbackdat: postfeedreducer,
        getfeedreducer: getfeedreducer,
        deletefeedreducer: deletefeedreducer,

        ShowProductDetails: ShowProductDetails,
        ShowProductDetailsId: ShowProductDetailsId,
        PostProductReducer: PostProductReducer,
        UpdateProductReducer: UpdateProductReducer,
        DeleteProductReducer: DeleteProductReducer,

        postCartReducer: postCartReducer,
        getCartReducer: getCartReducer,
        deleteCartReducer: deleteCartReducer,

        postReviewReducer: postReviewReducer,

        getSubCatreducer: getSubCatreducer,
        postSubCatreducer: postSubCatreducer,
        updateSubCatreducer: updateSubCatreducer,
        delSubCatreducer: delSubCatreducer,

        getCatreducer: getCatreducer,
        postCatreducer: postCatreducer,
        updateCatreducer: updateCatreducer,
        delCatreducer: delCatreducer,


        forgotpassReducer: forgotpassReducer,
        ResetpassReducer: ResetpassReducer,

        postOrderReducer: postOrderReducer,
        getOrderByIdReducer: getOrderByIdReducer,
        getOrderByIdAdminReducer: getOrderByIdAdminReducer,
        UpdateAdminReducer: UpdateAdminReducer


    }
)

export default reducers;