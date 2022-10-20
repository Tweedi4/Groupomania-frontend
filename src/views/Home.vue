<template>
    <Header/>
    <div>
        <h3 class="bonjour">Bonjour, {{getPseudoUserFromVueX}} </h3>
        <CreatePost/>
        <div v-if="getPostsListFromVueX === null">
        </div>    
        <div v-if="getCommentListFromVueX === null">
        </div>
        <div v-else>
        <Posts v-for="post in getPostsListFromVueX" v-bind:key="post.id" v-bind:postId="post.id" />
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/Header';
import CreatePost from '@/components/CreatePost';
import Posts from '@/components/Posts';
import { mapState } from 'vuex';




export default {
    name: 'Home',
    components: {
        Header,
        CreatePost,
        Posts,
    },
    data(){
        return {

        }
    },

    computed: {
        ...mapState({
            getPostsListFromVueX: 'postsListFromVueX',
            getTokenUserIdFromVueX: 'tokenUserFromVueX',
            getUserIdFromVueX: 'userIdFromVueX',
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
            //getCommentsListFromVueX: 'commentsListFromVueX',
        })
    },

    async created() {
        await this.$store.dispatch('getUserProfile', { userId: this.getUserIdFromVueX, token: this.getTokenUserIdFromVueX});
        console.log(this.getUserIdFromVueX)
        await this.$store.dispatch('getAllPosts', { token: this.getTokenUserIdFromVueX});
        console.log(this.getPostsListFromVueX);
        //await this.$store.dispatch('getAllCommentsFromPost', { postId: postId, token: this.getTokenUserIdFromVueX});
        //console.log(this.getCommentsListFromVueX);
    },

    methods:{

    },


}
</script>

<style scoped>

.bonjour {
margin-top: 40px;
}


</style>