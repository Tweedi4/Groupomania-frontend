<template>
<div class="container">
    <div v-if="User">
    <img class="aviIcon">
    <h1 class="pseudo">{{User}}</h1>
    </div>
    <form>
        <div>
            <input v-model="form.title" id="title" class="text-field-title" placeholder="Titre" type="text" required />  
        </div>
        <div>
            <textarea v-model="form.content" id="content" class="text-field-text" placeholder="Ecrivez votre message..." required></textarea>
        </div>
        <div class="send-text">
            <img>
            <button type="submit" class="btn-send">Envoyer</button>
        </div>
    </form>
</div>
      <div class="container" v-if="Posts">
        <ul>
          <li v-for="post in Posts" :key="post.id">
            <div id="post-div">
              <p>{{post.title}}</p>
              <p>{{post.content}}</p>
              <p>Crée par: {{post.author.pseudo}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        Mince! Aucun post pour le moment.
      </div>
</template>
<script>

export default {
    data(){
        return {
            form: {
            title: '',
            content: '',
            //image
            }
        };
    },

    computed: {

    },

    methods: {

    }
}
</script>

<style scoped>

.container {
    width: 700px;
    height: 500px;
    margin: 65px 112px;
    padding: 52px 72px 56px 62px;
    border-radius: 79px;
    justify-content: center;
    background-color: #AB3535;
}

.text-field-title {
    width: 150px;
    height: 20px;
    position:relative;
    bottom: 40px;
    right: 175px;
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
  right: 280px;
  margin: 10px;
}

.pseudo {
    position: relative;
    bottom: 110px;
    right: 110px;
    color: white;
}

.btn-send {
    width: 100px;
    height: 50px;
    border-radius: 16px;
    margin: 20px;
    border: none;
}

</style>