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
    adminUserFromVueX: '0',
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
    SET_ADMIN_USER_FROM_VUEX(state,payload) {
      state.adminUserFromVueX = payload;
    },


    //POSTS

    SET_POSTS_LIST_FROM_VUEX(state,payload) {
      state.postsListFromVueX = payload;
    },


    //COMMENTS

    SET_COMMENTS_LIST_FROM_VUEX(state,payload) {
      state.commentsListFromVueX = payload;
    },
    SET_COMMENT_FROM_VUEX(state,payload) {
      state.commentFromVueX = payload;
    },

  },
  
  actions: {
    //USER
    async signup(context, payload){
      //try {
        const response = await userServices.signup(payload.email, payload.pseudo, payload.password);
        return response;
/*
      } catch(err) {
        console.log(err.message);
      }
*/      
    },


    async login(context, payload){
      //try {
        const response = await userServices.login(payload.email, payload.password);
          localStorage.setItem('token', JSON.stringify(response.data.token));
          localStorage.setItem('userId', JSON.stringify(response.data.userId));
          context.commit('SET_USER_ID_FROM_VUEX', response.data.userId);
          context.commit('SET_TOKEN_USER_FROM_VUEX', response.data.token);
          context.commit('SET_EMAIL_USER_FROM_VUEX', response.data.email);
          context.commit('SET_PSEUDO_USER_FROM_VUEX', response.data.pseudo);
          context.commit('SET_PICTURE_USER_FROM_VUEX', response.data.image);
          context.commit('SET_ADMIN_USER_FROM_VUEX', response.data.is_admin); 
      /*} catch(err) {
        //console.log(err);
      }*/
    },

    
    async deleteUser(context, payload){
      try {
        const response = await userServices.deleteUser(payload.userId, payload.token);
        console.log(response);
      } catch(err) {
        console.log(err.message);
      }
    },

    //
    async getUserProfile(context, payload){
      try {
        const response = await userServices.getUserProfile(payload.userId, payload.token);
        context.commit('SET_EMAIL_USER_FROM_VUEX', response.data.email);
        context.commit('SET_PSEUDO_USER_FROM_VUEX', response.data.pseudo);
        context.commit('SET_PICTURE_USER_FROM_VUEX', response.data.image);
        context.commit('SET_ADMIN_USER_FROM_VUEX', response.data.is_admin); 
      } catch(err) {
        console.log(err.message);
      }
    },

    async updateUser(context, payload){
      try {
        const response = await userServices.updateUser(payload.userId, payload.formData, payload.token);
        context.commit('SET_EMAIL_USER_FROM_VUEX', response.data.email);
        context.commit('SET_PSEUDO_USER_FROM_VUEX', response.data.pseudo);
        context.commit('SET_PICTURE_USER_FROM_VUEX', response.data.image);
      } catch(err) {
        console.log(err.message);
      }
    },


    //POSTS

    async getAllPosts(context, payload) {
      try {
        const response = await postServices.getAllPosts(payload.token);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

    async createPost(context, payload) {
      try {
        await postServices.createPost(payload.formData, payload.token);
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
    // Update Post
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
        await commentServices.createComment(payload.formData, payload.token);        
        return await commentServices.getAllCommentsFromPost(payload.formData.postId, payload.token);
        //context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
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
        const response = await commentServices.getOneComment(payload.commentId, payload.token);
        context.commit('SET_COMMENT_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

    /*
    
// Update Comment
    async updateComment(context, payload) {
      try {
        const response = await commentServices.updateComment(payload.commentId, payload.userId, payload.token);
        context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },
 
// Old Delete Comment
    async deleteComment(context, payload) {
      try {
        const response = await commentServices.deleteComment(payload.commentId, payload.userId, payload.token);
        context.commit('SET_COMMENT_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },
 */
    
      async deleteComment(context, payload) {
      try {
        await commentServices.deleteComment(payload.commentId, payload.userId, payload.token);
        return await commentServices.getAllCommentsFromPost(payload.postId, payload.token)
        //context.commit('SET_COMMENTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },
 
    
  },


  modules: {

  },
  plugins: [createPersistedState()]
})


