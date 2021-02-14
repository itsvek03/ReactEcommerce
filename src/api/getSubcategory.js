import axios from 'axios'
import { Header } from '../shared/helper/Header'



let config = {
    headers: {
        "Content-type": "application/json"
    }
}

// insert
export const postSubCatapi = (data) => {
    console.log("API DATA", data);
    return axios.post("http://localhost:8900/api/subcategory", data, { headers: Header(), config })
}

//get data
export const getSubCatapi = () => {
    return axios.get(`http://localhost:8900/api/subcategory`, config)
}

//update data
export const updatesubapi = (id, data) => {
    return axios.patch(`http://localhost:8900/api/subcategory/${id}`, JSON.stringify(data), config)
}


//delete data
export const deletesubapi = (id) => {
    return axios.delete(`http://localhost:8900/api/subcategory/${id}`, config)
}