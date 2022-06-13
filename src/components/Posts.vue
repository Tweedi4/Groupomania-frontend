<template>
    <div class="container">
            <img class="aviIcon">      
            <div class="card-post">
                <p class="user-pseudo">{{userData.pseudo}}</p>
                <h1 class="title">{{postData.title}}</h1>
                <p class="content">{{postData.content}}</p>
                <button>Modifier</button>
            </div>                
            <div>
                <CreateComment :commentPostId="postData.id"/>
                <section class="check-comment">
                    <div>
                    <div>
                        <img class="aviIcon">
                    </div> 
                    <p class="comment-user"></p>
                    <h1 class="comment-message">{{commentData.message}}</h1>
                    </div>
                    <button>Delete</button>
                </section>
                <ShowComments v-for="comment in getCommentFromVueX" v-bind:key="comment.id" v-bind:commentId="comment.id" />
                <p>Liker</p>
            </div>
            <div>

            </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import postServices from "@/services/postServices.js";

import CreateComment from '@/components/CreateComment';
import ShowComments from '@/components/ShowComments';


export default {
    name: "Posts",
    components: {
        ShowComments,
        CreateComment,
    },
    data() {
        return {
            postData: [],
            userData: [],

            //likes
            //comments

            //image

        };
    },
    props: {
        postId: {
            type: Number,
            required: true
        }
    },

    computed: {
        ...mapState({
            getTokenUserIdFromVueX: 'tokenUserFromVueX',
            getUserIdFromVueX: 'userIdFromVueX',
            getPostsListFromVueX: 'postsListFromVueX',          
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
            getCommentsListFromVueX: 'commentsListFromVueX',
            getCommentFromVueX: 'commentFromVueX',
            //image

        }),
    },

    created() {
        this.getOnePost();
    },


    methods: {

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

               getAllComments() {
            try {
                this.$store.dispatch('getAllCommentsFromPost', {postId: this.postId, token: this.getTokenUserFromVuex });                
            } catch(err) {
                console.log(err)
            }
        }

    },
  
}
</script>


<style scoped>
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
    color: white;
    margin: 20px;
    position: relative;
    bottom: 50px;
}
.card-post {
    justify-content: center;
    height: auto;
    
}
</style>

