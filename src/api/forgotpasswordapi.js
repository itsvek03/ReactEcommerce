import axios from 'axios';

let config = {
    headers: {
        "Content-type": "application/json"
    }
}


export const forgotpassapi = (data) => {
    console.log("FORGOT PASSWORD", data);
    return axios.post(`http://localhost:8900/api/visitor/forgotPassword`, JSON.stringify(data), config)
}



export const resetpassapi = (token, data) => {
    console.log("TOKEN", token);
    console.log("RESET PASSWORD", data)
    return axios.patch(`http://localhost:8900/api/visitor/resetPassword/${token}`, JSON.stringify(data), config)
}