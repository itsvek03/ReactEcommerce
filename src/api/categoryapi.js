import axios from 'axios'
import { Header } from '../shared/helper/Header'

let config = {
    headers: {
        "Content-type": "application/json"
    }
}

// insert
export const postCatapi = (data) => {
    console.log("CATEGORY API DATA", data);
    return axios.post("http://localhost:8900/api/category", data, { headers: Header(), config })
}

//get data
export const getCatapi = () => {
    return axios.get(`http://localhost:8900/api/category`, config)
}

//update data
export const updateCatapi = (id, data) => {
    console.log(id, data)
    return axios.patch(`http://localhost:8900/api/category/${id}`, data, config)
}


//delete data
export const deleteCatapi = (id) => {
    return axios.delete(`http://localhost:8900/api/category/${id}`, config)
}