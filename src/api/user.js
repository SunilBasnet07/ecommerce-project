import config from "@/config/config";
import axios from "axios";
import { authToken } from "./token";

const getUserById = async (id) => {
    console.log(id);
    const response = await axios.get(`${config.apiUrl}/api/users/${id}`,{
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    }
       
    );
    return response.data;
}

const uploadProfileImage = async (id, data) => {

    const response = await axios.put(`${config.apiUrl}/api/users/${id}/profile-image`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data;
}
const updateAuthUser = async (id, data) => {

    const response = await axios.put(`${config.apiUrl}/api/users/${id}`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data;
}
export { uploadProfileImage,updateAuthUser,getUserById }