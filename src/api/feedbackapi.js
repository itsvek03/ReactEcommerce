import axios from "axios"
import { Header } from '../shared//helper/Header'

const postfeedback_url = "http://localhost:8900/api/feedback";

let config = {
    headers: {
        "Content-type": "application/json"
    }
}

export const postfeedbacks = (data) => {
    console.log("POST API", data);
    return axios.post(postfeedback_url, JSON.stringify(data), config);
}

export const deletefeedbacks = (id) => {
    console.log("Delete", id);
    return axios.delete(`http://localhost:8900/api/feedback/${id}`, { headers: Header(), config })
}

export const getfeedbacks = () => {
    // console.log(id);
    return axios.get(`http://localhost:8900/api/feedback`, { headers: Header(), config })
}