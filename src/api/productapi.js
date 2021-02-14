import axios from "axios";

export const product_url = "http://localhost:8900/api/product";
export const productbyid_url = "http://localhost:8900/api/product";

let config = {
    headers: {
        "Content-type": "application/json"
    }
}


export const getProduct = (data) => {
    if (!data) {
        return axios.get(`http://localhost:8900/api/product`, config);
    } else {
        return axios.get(`http://localhost:8900/api/product?Price[gte]=${data}`, config);
    }

}

export const getProductbyId = (id) => {
    console.log(id)
    return axios.get(`${productbyid_url}/${id}`, config);
}

export const postproductapi = (data) => {
    console.log("API PRODUCT", data);
    return axios.post(product_url, data, config)
}

export const deleteProductId = (id) => {
    console.log("DELETE API", id)
    return axios.delete(`${productbyid_url}/${id}`, config);
}

export const UpdateProduct = (id, data) => {
    console.log(id, data)
    return axios.patch(`${productbyid_url}/${id}`, data, config);
}
