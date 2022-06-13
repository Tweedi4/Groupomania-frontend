import axios from 'axios';

let baseURL = `http://localhost:3000/api`;

export default {

    getAllCommentsFromPost(postId,token) {
        return axios.get(`${baseURL}/comments/post/${postId}`,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },
    getOneComment(commentId,token) {
        console.log("service : " + commentId)
        return axios.get(`${baseURL}/comments/${commentId}`,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },

    createComment(formData, token) {
        return axios.post(`${baseURL}/comments`,
        formData,
        { headers : {Authorization: `Bearer ${token}`}}
        );
    },
/*

    deleteComment(commentId,userId,token) {
        return axios.delete(`${baseURL}/comments/${commentId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },

    //updateComment
    updateComment(commentId,userId,token) {
        return axios.delete(`${baseURL}/comments/${commentId}`,
        { data: {userId: userId}, headers: { Authorization: `Bearer ${token}`}}
        );
    },
*/
}