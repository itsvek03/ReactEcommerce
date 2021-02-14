import { userRegister, userLogin, LoginUser, UpdateuserApi } from "../api/userapi";
import { USER_REGISTER, ERROR, LOGIN_USER, LOGGED_USER, LOGOUT, UPDATE_USER, UPDATE_ERROR } from "../actions/user.type"
import { history } from '../shared/helper/history'
import Swal from 'sweetalert2';
import { setAuthenticated, isAuthenticated, removetokenBased } from '../shared/helper/auth'

export const UserRegisterAction = (data) => {
    return async (dispatch) => {
        try {
            var response = await userRegister(data);
            console.log("ACTIONS", response);
            dispatch({
                type: USER_REGISTER,
                payload: response.data.user
            })
            Swal.fire({
                title: "Done!",
                text: response.data.data.user.FirstName + `  Registered Successfully`,
                icon: "success",
                timer: 10000,
                customClass: 'slow-animation'
            })
            history.push('/login');
            window.location.reload();
        }
        catch (error) {

            console.log("ERROR", error.response.data)
            Swal.fire({
                title: "Oops....!",
                text: "Email is already present",
                //text: error.response.data.message,
                icon: "error",
                timer: 2000,

            })
        }

    }
}


// ------------------  LOGIN USER----------

export const loginUserAction = (data) => {
    return async (dispatch) => {
        try {
            var response = await userLogin(data);
            localStorage.setItem("currentuser", JSON.stringify(response));
            console.log("LOGIN ACTION", response)
            dispatch({
                type: LOGIN_USER,
                payload: response.data.user
            })
            Swal.fire({
                title: "Done!",
                // text: `${response.data.data.user.FirstName} <br/>
                //         Login Successfully`,
                html:
                    `${response.data.data.user.FirstName}` +
                    '<br/>' +
                    '<strong>Login Successfully</strong> ',
                icon: "success",
                timer: 10000,
                customClass: 'slow-animation'
            })

            //console.log(response.data.token)
            //localStorage.setItem('token', response.data.token);
            setAuthenticated(response.data.token, response.data.data.user);

            if (isAuthenticated() && isAuthenticated().data.data.user.role === "Admin") {
                console.log('Redirecting to AdminDashboard')
                history.push('/admin/adminDashboard')
                window.location.reload()

            } else {
                console.log('Redirecting to User Dashboard')
                history.push('/')
                window.location.reload()
            }

        }
        catch (error) {
            dispatch({
                type: ERROR,
                payload: error.response.data
            })
            console.log("ERROR", error.response.data)
            Swal.fire({
                title: "Oops....!",
                text: error.response.data.message,
                //text: error.response.data.message,
                icon: "error",
                timer: 5000,
                customClass: 'slow-animation'
            })
        }
    }
}

//-------------  LOG OUT ------------------
export const logOutAction = () => {
    return async dispatch => {
        localStorage.removeItem("currentuser");
        removetokenBased('currentuser');
        dispatch({ type: LOGOUT });
        history.push("/login");
        window.location.reload();
    }
}

// ----------------- LOGIN DETAILS USER --------------
export const LoggedinUserAction = () => {
    return async dispatch => {
        try {
            let response = await LoginUser();
            console.log("LOGIN DETAILS ACTIONS", response);
            dispatch({
                type: LOGGED_USER,
                payload: response.data
            })
        } catch (error) {
            dispatch({ type: ERROR, payload: error.response.data });
        }
    }
}

// ---------------------- UPDATE LOGIN USER DATA --------------
export const UpdateUserAction = (data) => {
    return async dispatch => {
        try {
            let response = await UpdateuserApi(data);
            console.log("UPDATE DETAILS ACTIONS", response);
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
            Swal.fire({
                title: "Success",
                text: "Updated Successfully",
                //text: error.response.data.message,
                icon: "success",
                timer: 5000,
                customClass: 'slow-animation'
            })

        } catch (error) {
            dispatch({ type: UPDATE_ERROR, payload: error.response.data });
        }
    }
}