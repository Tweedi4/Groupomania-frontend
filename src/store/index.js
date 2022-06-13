import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";
import postServices from '../services/postServices';
import commentServices from '../services/commentServices';
import userServices from '../services/userServices';

export default createStore({
  state: {
    //USER

    emailUserFromVueX: '',
    pseudoUserFromVueX: '',
    pictureUserFromVueX: '',
    tokenUserFromVueX: JSON.parse(localStorage.getItem('token')),
    userIdFromVueX: localStorage.getItem('userId'),


    //POSTS
    
    postsListFromVueX: null,

  },
  getters: {

  },
  mutations: {
    //USER

    SET_EMAIL_USER_FROM_VUEX(state,payload) {
      state.emailUserFromVueX = payload;
    },
    SET_PSEUDO_USER_FROM_VUEX(state,payload) {
      state.pseudoUserFromVueX = payload;
    },
    SET_PICTURE_USER_FROM_VUEX(state,payload) {
      state.pictureUserFromVueX = payload;
    },


    SET_TOKEN_USER_FROM_VUEX(state,payload) {
      state.tokenUserFromVueX = payload;
    },

    SET_USER_ID_FROM_VUEX(state,payload) {
      state.userIdFromVueX = payload;
    },


    //POSTS

    SET_POSTS_LIST_FROM_VUEX(state,payload) {
      state.postsListFromVueX = payload;
    },


    SET_COMMENTS_LIST_FROM_VUEX(state,payload) {
      state.commentsListFromVueX = payload;
    },
    SET_COMMENT_FROM_VUEX(state,payload) {
      state.commentFromVueX = payload;
      //console.log("comment : " + JSON.stringify(payload));
    },

  },
  actions: {
    //USER

    async login(context, payload){
      try {
        const response = await userServices.login(payload.email, payload.password);
       localStorage.setItem('token', JSON.stringify(response.data.token));
       localStorage.setItem('userId', JSON.stringify(response.data.userId));
       context.commit('SET_USER_ID_FROM_VUEX', response.data.userId);
       context.commit('SET_TOKEN_USER_FROM_VUEX', response.data.token);
       //console.log("store" + response.data) 
      } catch(err) {
        console.log(err.message);
      }
    },

//à supprimer
    async getUserFromToken(context, payload){
      try {
        const response = await userServices.getUserFromToken(payload.token);
        
        context.commit('SET_USER_ID_FROM_VUEX', response.data.userId);
      //context.commit('SET_PICTURE_USER_FROM_VUEX', response.data.image);
      } catch(err) {
        console.log(err.message);
      }
    },


    async getUserProfile(context, payload){
      try {
        const response = await userServices.getUserProfile(payload.userId, payload.token);
        context.commit('SET_EMAIL_USER_FROM_VUEX', response.data.email);
        context.commit('SET_PSEUDO_USER_FROM_VUEX', response.data.pseudo);
      //context.commit('SET_PICTURE_USER_FROM_VUEX', response.data.image);
      } catch(err) {
        console.log(err.message);
      }
    },

    //POSTS

    async getAllPosts(context, payload) {
      try {
        const response = await postServices.getAllPosts(payload.token);
        //console.log("store" + response.data);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

    async createPost(context, payload) {
      try {
        //console.log("store : " + payload.token)
        await postServices.createPost(payload.formdata, payload.token);
        const response = await postServices.getAllPosts(payload.token);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err) {
        console.log(err.message);
      }
    },

    async deletePost(context, payload) {
      try {
        await postServices.deletePost(payload.postId, payload.userId, payload.token);
        const response = await postServices.getAllPosts(payload.token);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err) {
        console.log(err.message);
      }
    },

/*
    //add update
    async updatePost(context, payload) {
      try {
        await postServices.updatePost(payload.postId, payload.userId, payload.token);
        const response = await postServices.getAllPosts(payload.token);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err) {
        console.log(err.message);
      }
    },
*/
    //C0MMENTS

    async createComment(context, payload) {
      try {
        //console.log("store : " + JSON.stringify(payload.formData))
        await commentServices.createComment(payload.formData, payload.token);
        const response = await commentServices.getAllCommentsFromPost(payload.formData, payload.token);
        context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err) {
        console.log(err.message);
      }
    },

    async getAllCommentsFromPost(context, payload) {
      try {
        const response = await commentServices.getAllCommentsFromPost(payload.postId, payload.token);
        context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },
    async getOneComment(context, payload) {
      try {
        //console.log("store : " + JSON.stringify(payload.commentId))
        const response = await commentServices.getOneComment(payload.commentId, payload.token);
        context.commit('SET_COMMENT_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

    /*
    
// add update 
    async updateComment(context, payload) {
      try {
        const response = await commentServices.updateComment(payload.commentId, payload.userId, payload.token);
        context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

// add delete

    async deleteComment(context, payload) {
      try {
        const response = await commentServices.deleteComment(payload.commentId, payload.userId, payload.token);
        context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },
  */
    
  },


  modules: {

  },
  plugins: [createPersistedState()]
})


