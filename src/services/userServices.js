import axios from 'axios';

let baseURL = `http://localhost:3000/api`;


export default {
    //AUTH
    signup(emailUser,pseudoUser,passwordUser){
        return axios.post(`${baseURL}/signup`,
        { email:emailUser, pseudo:pseudoUser, password:passwordUser}
        );
    },

    login(emailUser,passwordUser){
        return axios.post(`${baseURL}/login`,
        {email: emailUser, password: passwordUser}
        );
    },
    //USER
    getUserProfile(userId, token) {
        return axios.get(`${baseURL}/users/${userId}`,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },

    deleteUser(userId, token) {
        return axios.delete(`${baseURL}/users/${userId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },
    updateUser(userId, token) {
        return axios.put(`${baseURL}/users/${userId}`, 
        { userId: userId},
        { headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}}
        );
    }
}
