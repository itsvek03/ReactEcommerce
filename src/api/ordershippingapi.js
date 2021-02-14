import axios from "axios";
import { Header } from '../shared/helper/Header'


let config = {
    headers: {
        "Content-type": "application/json"
    }
}

//PostOrder
export const postOrdersapi = (data) => {
    console.log("ORDER VALUE DATA", data)
    return axios.post(`http://localhost:8900/api/order`, data, { headers: Header(), config })
}

// Get All Orders
export const getAllOrdersapi = () => {
    return axios.get(`http://localhost:8900/api/order/myorders`, { headers: Header(), config })
}


// UpdateOrder for payment 
export const UpdateOrderforpaidapi = (orderid) => {
    console.log("API VALUE ORDER", orderid);
    return axios.patch(`http://localhost:8900/api/order/${orderid}/pay`, { headers: Header(), config })
}

//Get Order By id
export const getOrdersbyid = (orderid) => {
    return axios.get(`http://localhost:8900/api/order/${orderid}`, { headers: Header(), config })
}

// Get Orders 
export const AllordersApi = () => {
    return axios.get(`http://localhost:8900/api/order`, config)
}

//UpdateOrderDeliever
export const UpdateOrdersApiAdmin = (id) => {
    console.log("ID", id)
    return axios.patch(`http://localhost:8900/api/order/${id}/deliver`, {}, { headers: Header(), config })
}