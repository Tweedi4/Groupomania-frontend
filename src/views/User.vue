<template>
<Header/>

<UserProfile/>
</template>

<script>
import Header from '@/components/Header';
import UserProfile from '@/components/UserProfile';
import { mapState } from 'vuex';

export default {
  name: 'User',
    components: {
        Header,
        UserProfile,
    },

    computed: {
    ...mapState({

      getTokenUserIdFromVueX: 'tokenUserFromVueX',
      getUserIdFromVueX:'userIdFromVueX',
      }),

    },

    async created() {
      await this.$store.dispatch('getUserProfile', {userId: this.getUserIdFromVueX, token: this.getTokenUserIdFromVueX})
    }

} 
</script>

<style scoped>


</style>
