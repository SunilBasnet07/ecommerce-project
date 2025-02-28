import config from '@/config/config'
import axios from 'axios'

const userLogin = async (data) => {

    const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

    return response;


}

const userRegister = async ({ name, email, password, confirmPassword }) => {

    const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
        name, email, password, confirmPassword
    });
    return response;

}


export { userLogin, userRegister }