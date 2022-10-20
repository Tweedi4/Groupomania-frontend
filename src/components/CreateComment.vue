<template>
<form @submit.prevent>
    <div class="create-comment">
        <textarea class="text-field-text" v-model="message" id="message" placeholder="Ecrivez un commentaire..."></textarea>
        <button @click="createComment()" type="submit" class="btn-send">Envoyer</button>
        <hr class="solid">        
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
        },
    },
    computed: {
        ...mapState({
            getUserIdFromVueX: 'userIdFromVueX',
            getTokenUserIdFromVueX: 'tokenUserFromVueX',
        }),

    },

    methods: {

    },

}

</script>

<style scoped>


.text-field-text {
    width: 500px;
    height: 150px;
}

hr.solid {
  border-top: 3px solid #bbb;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
}
@media (max-width: 400px) {
    .text-field-text {
        width: 290px;
        height: 100px;
    }
}
@media (max-width: 800px) {
    .text-field-text {
        width: 290px;
        height: 100px;
    }
}

</style>