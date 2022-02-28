<template>
    <Header/>
    <div>
        <CreatePost/>
        <Posts/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import CreatePost from '@/components/CreatePost';
import Posts from '@/components/Posts';

import { mapState } from 'vuex';


export default {
    components: {
        Header,
        CreatePost,
        Posts,
    },

    computed: {
        ...mapState({
            getUserIdFromVueX: 'userIdFromVueX',
            getTokenUserFromVueX: 'tokenUserFromVueX',
        }),
    },

    async created() {
    await this.$store.dispatch('getUserProfile', { userId: this.getUserIdFromVueX, token: this.getTokenUserFromVueX});
    },

    methods:{

    },


}
</script>

<style scoped>

</style>