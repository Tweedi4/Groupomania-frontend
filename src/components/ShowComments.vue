<template>
    <section class="check-comment">
        <div>
        <img class="aviIcon">
        </div> 
        <div class="comment-user">
        </div>
        <div class="comment-message">{{commentData.message}}
        </div>
        <button>Delete</button>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "ShowComment",
    data(){
        return {
            commentData: [],
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
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
            getCommentFromVueX: 'commentFromVueX',
        }),

    },

    methods: {
         getOneComment() {
            try {
                this.$store.dispatch('getOneComment', {commentId: this.commentId, token: this.getTokenUserFromVuex });
                
            } catch(err) {
                console.log(err)
            }
        }

    },


}

</script>

<style scoped>

.aviIcon {
  width: 90px;
  height: 90px;
  border-radius: 108px;
  border: solid 1px white;
  position: relative;
  right: 230px;
  bottom: 20px;
  margin: 10px;
}
</style>