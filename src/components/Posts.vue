<template>
    <div class="container">
            <img class="aviIcon" :src="userData.image">      
            <div class="card-post">
                <p class="user-pseudo">{{userData.pseudo}}</p>
                <h1 class="title">{{postData.title}}</h1>
                <p class="content">{{postData.content}}</p>
                <img class="image-post" :src="postData.image_url">
                <button v-if="getAdminUserFromVueX === 1" @click="deletePost(postData.id)" class="btn-send">Supprimer</button>
            </div>               
            <div>
                <CreateComment :commentPostId="postData.id"/>  
                <section class="check-comment">
                    <div class="card-comment" :key="index" v-for="(comment, index) in commentData">
                        <div>
                            <img class="aviIcon" :src="comment.User.image">
                        </div>                          
                        <p class="user-pseudo">{{comment.User.pseudo}}</p>
                        <h1 class="message">{{comment.message}}</h1>
                        <button v-if="getAdminUserFromVueX === 1" @click="deleteComment(comment.id)" class="btn-send">Supprimer</button>
                        <hr class="solid">  
                    </div>
                </section>  
            </div>
            <div>

            </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import postServices from "@/services/postServices.js";
import commentServices from "@/services/commentServices.js";

import CreateComment from '@/components/CreateComment';


export default {
    name: "Posts",
    components: {
        CreateComment,
    },
    data() {
        return {
            postData: [],
            userData: [],
            commentData: [],
            //likes
            //comments
            //image
        };
    },
    props: {
        postId: {
            type: Number,
            required: true
        },

        commentPostId: {
            type: Number,
            required: true
        },
    },

    computed: {
        ...mapState({
            getTokenUserIdFromVueX: 'tokenUserFromVueX',
            getUserIdFromVueX: 'userIdFromVueX',
            getPostsListFromVueX: 'postsListFromVueX',          
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
            getAdminUserFromVueX:'adminUserFromVueX',
            getPictureUserFromVueX: 'pictureUserFromVueX',
        }),
    },

    created() {
        this.getOnePost();
        this.getAllCommentsFromPost();
    },


    methods: {

//POSTS

        async getOnePost() {
            try {
                const response = await postServices.getOnePost(
                    this.postId,
                    this.getTokenUserIdFromVueX,
                )
                this.postData = response.data;
                this.userData = response.data.User;
                
            } catch(err) {
                console.log(err)
            }
        },

        
        deletePost(postId) {
            try {                
                this.$store.dispatch('deletePost', {postId: postId, userId: this.getUserIdFromVueX, token: this.getTokenUserIdFromVueX });
                this.$store.dispatch('getAllPosts', {token: this.getTokenUserIdFromVueX });
            } catch(err) {
                console.log(err)
            }
        },

//COMMENTS

        async getAllCommentsFromPost() {
            try {
                const response = await commentServices.getAllCommentsFromPost(
                    this.postId,
                    this.getTokenUserIdFromVueX,)
                    this.commentData = response.data;              
            } catch(err) {
                console.log(err)
            }
        },

         getOneComment() {
            try {
                this.$store.dispatch('getOneComment', {commentId: this.commentId, token: this.getTokenUserIdFromVueX });   
            } catch(err) {
                console.log(err)
            }
        },

        deleteComment(commentId) {
            try {
                this.$store.dispatch('deleteComment', {commentId: commentId, userId: this.getUserIdFromVueX, token: this.getTokenUserIdFromVueX });
                this.getAllCommentsFromPost();
            } catch(err) {
                console.log(err)
            }
        },

    },


    
  
}
</script>


<style scoped>

hr.solid {
  border-top: 3px solid #bbb;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
}
.container {
    width: 700px;
    height: auto;
    padding: 52px 72px 56px 62px;
    margin-top: 50px;
    border-radius: 79px;
    justify-content: center;
    background-color: #AB3535;
}
.aviIcon {
  width: 120px;
  height: 120px;
  border-radius: 108px;
  border: solid 1px white;
  position: relative;
  right: 230px;
  margin: 10px;
  bottom: 20px;
}

.message {
    font-size: 25px;
    color: black;
    margin: 10px;
    position: relative;
    bottom: 50px;
    text-align: justify;
}

.text-field-text {
    width: 500px;
    height: 150px;
}

.user-pseudo {
    width: 50px;
    font-size: 39px;
    color: white;
    bottom: 120px;
    left: 120px;
    position: relative;
    margin-left: 10px;
}
.title {
    font-size: 30px;
    color: black;
    justify-content: center;
    margin: 10px;
    position: relative;
    bottom: 70px;

}
.content {
    font-size: 25px;
    color: black;
    margin: 10px;
    position: relative;
    bottom: 50px;
    text-align: justify;
}
.card-post {
    justify-content: center;
    height: auto;
    
}

.image-post {
    justify-content: center;
    text-align: justify;
    width: 500px;
    height: auto;
    margin: auto;
    display: flex;
}
</style>

