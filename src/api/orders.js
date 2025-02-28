import config from "@/config/config";
import axios from "axios";
import { authToken } from "./token";



const getAllOrders = async () => {

    const response = await axios.get(`${config.apiUrl}/api/orders`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    }
    );
    return response.data;
}
const createOrder = async (data) => {
    const response = await axios.post(`${config.apiUrl}/api/orders`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    });
    return response.data;
}
const checkoutOrder = async (id,data) => {
   
    const response = await axios.put(`${config.apiUrl}/api/orders/${id}/checkout`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    });
    return response.data;
}
const confirmOrder = async (id,status) => {
   
    const response = await axios.put(`${config.apiUrl}/api/orders/${id}/confirm?status=${status}`,{}, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    });
    return response.data;
}

const updateStatus = async (id,data) => {
   
    const response = await axios.put(`${config.apiUrl}/api/orders/${id}/status`,data, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    });
    return response.data;
}

const getOrdersByUser = async (userId, status) => {

    const response = await axios.get(`${config.apiUrl}/api/orders/users/${userId}?status=${status}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        },

    }
    );
    return response.data;
}

export { createOrder, getOrdersByUser,checkoutOrder,confirmOrder,getAllOrders ,updateStatus  };