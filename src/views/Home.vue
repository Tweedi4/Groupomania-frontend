<template>
    <Header/>
    <div>
        <h3>Bonjour, {{getPseudoUserFromVueX}} </h3>
        <CreatePost/>
        <div v-if="getPostsListFromVueX === null">
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
            getTokenUserFromVueX: 'tokenUserFromVueX',
            getUserIdFromVueX: 'userIdFromVueX',
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
        })
    },

    async created() {
        //await this.$store.dispatch('getUserFromToken', { token: this.getTokenUserFromVueX});
        await this.$store.dispatch('getUserProfile', { userId: this.getUserIdFromVueX, token: this.getTokenUserFromVueX});
        console.log(this.getUserIdFromVueX)
        await this.$store.dispatch('getAllPosts', { token: this.getTokenUserFromVueX});
        console.log(this.getPostsListFromVueX);
        //console.log("nouveau login et token : " + this.getTokenUserFromVueX);

    },

    methods:{

    },


}
</script>

<style scoped>

</style>