import axios from "axios"
import { Header } from '../shared//helper/Header'

let config = {
    headers: {
        "Content-type": "application/json"
    }
}

export const postreviewapi = (data) => {
    console.log("Review Data", data)
    return axios.post(`http://localhost:8900/api/review`, data, { headers: Header(), config })
}

// export const getreviewapi = (productid) => {
//     console.log("Review Data", productid)
//     return axios.post(`http://localhost:8900/api/product/${productid}/review`, config)
// }