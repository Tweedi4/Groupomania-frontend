import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";
import postServices from '../services/postServices';
import userServices from '../services/userServices';

export default createStore({
  state: {
    //USER
    emailUserFromVueX: '',
    pseudoUserFromVueX: '',
    //pictureUser
    //tokenUser


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
        //+pictureUser
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
        await postServices.createPost(payload.data, payload.token);
        const response = await postServices.getAllPosts(payload.token);
        context.commit('SET_POSTS_LIST_FROM_VUEX', response.data);
      } catch(err) {
        console.log(err.message);
      }
    },

    async deletePost(context, payload) {
      try {
        await postServices.deletePost(payload.postId, payload.userId, payload.token);
        const response = await postServices.getAllPost(payload.token);
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


