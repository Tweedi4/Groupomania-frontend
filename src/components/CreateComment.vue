<template>
<form @submit.prevent>
    <div class="create-comment">
        <textarea class="text-field-text" v-model="message" id="message" placeholder="Ecrivez un commentaire..."></textarea>
        <button @click="createComment()" type="submit" class="btn-send">Envoyer</button>
    </div>
</form>
</template>

<script>

import { mapState } from 'vuex';


export default {
    name: "CreateComment",
    
    data(){
        return {
            message: '',
        }
    },
    props: {
        commentPostId: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState({
            getUserIdFromVueX: 'userIdFromVueX',
            getTokenUserFromVuex: 'tokenUserFromVueX',
        }),

    },

    methods: {
        createComment() {
            try {
                let formData = {'userId': this.getUserIdFromVueX,
                                'postId': this.commentPostId,
                                'message': this.message};
                //image
                //CreatePost.vueconsole.log("ca se passe ici !!!" + this.commentPostId)
                console.log(formData)
                //console.log("t'as eu le temps de tout voir ?" + this.getUserIdFromVueX + " " + this.message + " " + this.commentPostId)
                this.$store.dispatch('createComment', {formData: formData, token: this.getTokenUserFromVuex });
                this.message = '';
            } catch(err) {
            console.log(err)
            }
        } 
    },

}

</script>

<style scoped>


.text-field-text {
    width: 500px;
    height: 150px;
}

</style>