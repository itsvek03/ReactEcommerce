import axios from "axios";
import { Header } from '../shared//helper/Header'


let config = {
    headers: {
        "Content-type": "application/json"
    }
}

export const postcart = (data, productid) => {
    console.log("APi", data, productid)
    return axios.post(`http://localhost:8900/api/ecart/${productid}`, data, { headers: Header(), config })
}

export const getcart = (userid) => {
    console.log("API", userid)
    return axios.get(`http://localhost:8900/api/visitor/${userid}/ecart`, config)
}

export const deletecart = (deleteid) => {
    console.log("DELETE CART API", deleteid);
    return axios.delete(`http://localhost:8900/api/ecart/${deleteid}`, { headers: Header(), config })
}