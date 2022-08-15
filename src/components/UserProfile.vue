<template>
    <div class="card">
    <section class="card__wrapper">
      <form @submit.prevent enctype="multipart/form-data" class="formStyle" >
        <img class="aviIcon" :src="getPictureUserFromVueX">
        <input @change="preview" type="file" ref="file" name="image_url" id="image_url" class="btn-select" />
        <button @click="updateUser()" class="aviButton">Mise à jour</button>
        <div class="pseudo">{{getPseudoUserFromVueX}}</div> 
        <div class="bioForm">
            <label for="pseudo">Pseudo</label>
            <input v-model="newpseudo" id="newpseudo" type="text"/>
            <label for="email">Email</label>
            <input v-model="email" id="email" type="text"/>
            <div>{{ getEmailUserFromVueX }}</div>
            <button @click="deleteUser()" class="deleteButton">Supprimer son compte</button>
        </div>
      </form>
    </section>
</div>
</template>

<script>
import { mapState } from 'vuex';
//import userServices from '@/services/userServices';



export default {
  name:'UserProfile',

  data() {
    return {
      file: '',
      newpseudo: '',
      email: '',
      imgTempUrl: null,
      selectedFile: null,
    }
  },

  computed: {
    ...mapState({
      getTokenUserIdFromVueX: 'tokenUserFromVueX',
      getUserIdFromVueX: 'userIdFromVueX',
      getPseudoUserFromVueX: 'pseudoUserFromVueX',
      getEmailUserFromVueX: 'emailUserFromVueX',
      getPictureUserFromVueX: 'pictureUserFromVueX'
    })
  },

  methods: {
    deleteUser() {
      try {
        this.$store.dispatch('deleteUser', {userId: this.getUserIdFromVueX, token: this.getTokenUserIdFromVueX });
      } catch(err) {
      console.log(err)
    }

    },
// formData + check store + backend updateUser

updateUser() {
  try {
    let formData = new FormData()
    formData.append('userId', this.getUserIdFromVueX);
    formData.append('newpseudo', this.newpseudo);
    formData.append('email', this.email);
    formData.append('image_url', this.selectedFile);
    this.$store.dispatch('updateUser', {userId: this.getUserIdFromVueX, formData: formData, token:this.getTokenUserIdFromVueX});
    this.$store.dispatch('getUserProfile', {userId: this.getUserIdFromVueX, token:this.getTokenUserIdFromVueX});
    this.pseudo = '';
    this.email = '';
    this.image_url = '';
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
.card {
    display: flex;
    justify-content: center;
    flex-direction:unset;
    height: 1000px;
}

.card__wrapper {
  width: 600px;
  height: 500px;
  border-radius: 65px;
  background-color: #AB3535;
  margin: 40px;
}

.btn-select {
  position: relative;
  bottom:  100px;
  right: 150px;
  color: transparent;
}


.aviIcon {
  width: 120px;
  height: 120px;
  border-radius: 108px;
  border: solid 2px white;
  position: relative;
  flex-wrap: wrap;
  margin: 10px;
}

.aviButton {
  align-items: bottom;
  margin: 10px;
  position: relative;
  right: 205px;
  bottom: 100px;
  border: none;
  border-radius: 5px;
  padding: 4px;

}

.pseudo {
    position: relative;
    color: white;
    font-size: 39px;
    align-items: center;
    align-content: center;
    bottom: 100px;
}

.email {
  position: relative;
  top: 50px;
}

.formStyle {
  width: 200px;
  display:inline-block;
}

.bioForm {
  width: 200px;
  position:relative;
  bottom: 80px;
  color: white;
}


.text-field {
  width: 450px;
  height: 54px;
  margin-top: 20px;
  padding: 5px;
  border-radius: 16px;
  background-color: #fff;
  border: none;
  position: relative;
  top: 50px;
}

.deleteButton {
    width: 200px;
    height: 50px;
    border-radius: 33px;
    background-color: #fff;
    border: none;
    position: relative;
    top: 20px;
}

@media (max-width: 400px) {
  .formStyle{
    margin:20px;
  }
  .pseudo {
    font-size: 25px;
    margin: 20px;
  }
  .bioForm {
    width: 200px;
    position:relative;
    bottom: 90px;
    color: white;
  }

  .btn-select {
    position: relative;
    bottom:  100px;
    right: 40px;
    color: transparent;
    font-size: x-small;
  }
  .aviButton {
    align-items: bottom;
    margin: 10px;
    position: relative;
    right: 105px;
    bottom: 100px;
    border: none;
    border-radius: 5px;
    padding: 4px;
    font-size: x-small;
  }
}

@media (max-width: 800px) {
  .formStyle{
    margin:20px;
  }
  .pseudo {
    font-size: 30px;
    margin: 20px;
  }
  .bioForm {
    width: 200px;
    position:relative;
    bottom: 90px;
    color: white;
  }

  .btn-select {
    position: relative;
    bottom:  100px;
    right: 40px;
    color: transparent;
    font-size: x-small;
  }
  .aviButton {
    align-items: bottom;
    margin: 10px;
    position: relative;
    right: 105px;
    bottom: 100px;
    border: none;
    border-radius: 5px;
    padding: 4px;
    font-size: x-small;
  }
}

</style>