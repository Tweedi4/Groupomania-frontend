import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";
import postServices from '../services/postServices';
import userServices from '../services/userServices';

export default createStore({
  state: {
    //USER

    emailUserFromVueX: '',
    pseudoUserFromVueX: '',
    pictureUserFromVueX: '',
    tokenUserFromVueX: localStorage.getItem('token'),
    userIdFromVueX: '',


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

  },
  actions: {
    //USER

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
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err){
        console.log(err.message);
      }
    },

    async createPost(context, payload) {
      try {
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
    
  },

  modules: {

  },
  plugins: [createPersistedState()]
})


