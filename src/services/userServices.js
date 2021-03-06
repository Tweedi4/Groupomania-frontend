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
/*
    getUserFromToken(token) {
    
        return axios.get(`${baseURL}/user/token/${token}`,
        { data: {tokenNum: token}, headers : {Authorization: `Bearer ${token}`}}
        );
    },
*/

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
    updateUser(userId, token) {
        return axios.put(`${baseURL}/user/${userId}`, 
        { userId: userId},
        { headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}}
        );
    }
}
