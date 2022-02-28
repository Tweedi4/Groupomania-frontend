import axios from 'axios';

let baseURL = `http://localhost:3000/api`;

export default {
    //POSTS
    getAllPosts(token){
        return axios.get(`${baseURL}/posts`, 
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },

    getOnePost(postId, token){
        return axios.get(`${baseURL}/posts/${postId}`,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },

    createPost(formData, token){
        return axios.post(`${baseURL}/posts`,
        formData,
        { headers : {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}}
        );
    },

    updatePost(postId, userId, token){
        return axios.put(`${baseURL}/posts/${postId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },

    deletePost(postId, userId, token){
        return axios.delete(`${baseURL}/posts/${postId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },
}
