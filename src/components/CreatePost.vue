<template>
<div class="container">
    <div>
    <img class="aviIcon" :src="getPictureUserFromVueX">
    <p class="pseudo">{{getPseudoUserFromVueX}}</p>
    </div>
    <form @submit.prevent enctype="multipart/form-data">
        <div>
            <input v-model="title" id="title" class="text-field-title" placeholder="Ecrivez un titre" type="text"/>  
        </div>
        <div>
            <textarea v-model="content" id="content" class="text-field-text" placeholder="Ecrivez votre message..."></textarea>
            <input @change="preview" type="file" ref="file" name="image_url" id="image_url" />
        </div>
        <div class="send-text">
            <img>
            <button @click="createPost()" type="submit" class="btn-send">Envoyer</button>
        </div>
    </form>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            title: '',
            content: '',
            file: '',
            imgTempUrl: null,
            selectedFile: null,
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
            getUserIdFromVueX: 'userIdFromVueX',
            getTokenUserIdFromVueX: 'tokenUserFromVueX',
            getPseudoUserFromVueX: 'pseudoUserFromVueX',
            getPostsListFromVueX: 'postsListFromVueX',
            getPictureUserFromVueX: 'pictureUserFromVueX',
        }),

    },

    methods: {
        createPost() {
            try {
                let formData = new FormData()
                formData.append('userId', this.getUserIdFromVueX);
                formData.append('title', this.title);
                formData.append('content', this.content);
                formData.append('image_url', this.selectedFile);
                //console.log("t'as eu le temps de tout voir ?" + this.getUserIdFromVueX + " " + this.title + " " + this.content+ " " + this.selectedFile)
                this.$store.dispatch('createPost', {formData: formData, token: this.getTokenUserIdFromVueX});
                this.title = '';
                this.content = '';
                this.image_url= '';

            } catch(err) {
                console.log(err)
            }

        },
        preview() {
           this.selectedFile = event.target.files[0]
           let input = event.target;
           if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.imgTempUrl = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
           }
        },
        cancelPreview() {
            document.getElementById('image_url').value = '';
            this.imgTempUrl = null;
        }  

    }
}
</script>

<style scoped>

.container {
    width: 700px;
    height: auto;
    margin-top: 50px;
    padding: 52px 72px 56px 62px;
    border-radius: 79px;
    justify-content: center;
    background-color: #AB3535;
}

.text-field-title {
    width: 150px;
    height: 20px;
    position:relative;
    bottom: 50px;
    right: 175px;
    margin-top:40px;
}

.text-field-text {
    width: 500px;
    height: 150px;
}

.aviIcon {
  width: 120px;
  height: 120px;
  border-radius: 108px;
  border: solid 1px white;
  position: relative;
  right: 230px;
  bottom: 20px;
  margin: 10px;
}


.pseudo {
    position: relative;
    bottom: 110px;
    right: 90px;
    color: white;
    font-size: 39px;
    margin-left: 20px;
}

.btn-send {
    width: 100px;
    height: 50px;
    border-radius: 16px;
    margin: 20px;
    border: none;
}

</style>