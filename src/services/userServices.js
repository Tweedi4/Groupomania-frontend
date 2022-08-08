import axios from 'axios';

let baseURL = `http://localhost:3000/api`;


export default {
    //AUTH
    signup(emailUser,pseudoUser,passwordUser){
        return axios.post(`${baseURL}/auth/signup`,
        { email:emailUser, pseudo:pseudoUser, password:passwordUser}
        );
    },

    login(emailUser,passwordUser){
        return axios.post(`${baseURL}/auth/login`,
        {email: emailUser, password: passwordUser}
        );
    },

    //USER
    getUserProfile(userId, token) {
        return axios.get(`${baseURL}/user/${userId}`,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },

    deleteUser(userId, token) {
        return axios.delete(`${baseURL}/user/${userId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },

    //modif with formData
    updateUser(userId, formData, token) {
        return axios.put(`${baseURL}/user/${userId}`, 
        formData,
        { headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}}
        );
    }
}
