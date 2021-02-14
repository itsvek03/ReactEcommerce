import axios from 'axios'
import { Header } from '../shared/helper/Header'


let register_url = "http://localhost:8900/api/visitor/signup";
let signin_url = "http://localhost:8900/api/visitor/login";
let userlogin_url = "http://localhost:8900/api/visitor/me"

let config = {
    headers: {
        "Content-type": "application/json"
    }
}

export const userRegister = (data) => {
    console.log("API", data);
    return axios.post(register_url, JSON.stringify(data), config);
}


export const userLogin = (data) => {
    console.log(data);
    return axios.post(signin_url, JSON.stringify(data), config);
}

export const LoginUser = () => {
    return axios.get(userlogin_url, { headers: Header(), config });
}

export const UpdateuserApi = (data) => {
    return axios.patch("http://localhost:8900/api/visitor/updateMe", data, { headers: Header(), config })
}