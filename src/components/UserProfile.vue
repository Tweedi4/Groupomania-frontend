<template>
    <div class="card">
    <section class="card__wrapper">
        <img class="aviIcon">
        <button class="aviButton">Choisir son avatar</button>
        <h1 class="pseudo">{{getPseudoUserFromVueX}}</h1>
        <div>
            <p class="email">{{getEmailUserFromVueX}}</p>
            <button class="deleteButton">Supprimer son compte</button>
        </div>
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
      
    }
  },

  computed: {
    ...mapState({
      getTokenUserIdFromVueX: 'tokenUserFromVueX',
      getUserIdFromVueX: 'userIdFromVueX',
      getPseudoUserFromVueX: 'pseudoUserFromVueX',
      getEmailUserFromVueX: 'emailUserFromVueX',
    })
  }




}

</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    flex-direction:unset;
}

.card__wrapper {
  width: 600px;
  height: 500px;
  border-radius: 65px;
  background-color: #AB3535;
  margin: 20px;
}
.aviIcon {
  width: 120px;
  height: 120px;
  border-radius: 108px;
  border: solid 1px white;
  position: relative;
  top: 20px;
  right: 100px;
}

.aviButton {
  align-items: bottom;
  margin: 20px;
  position: relative;
  top: 100px;
  right: 250px;
}

.pseudo {
    position: relative;
    color: white;
    bottom: 50px;
    right: 50px;
    font-size: 39px;
}

.email {
  position: relative;
  top: 50px;
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
    height: 60px;
    border-radius: 33px;
    background-color: #fff;
    border: none;
    position: relative;
    margin-top: 90px;
    top: 60px;
}
</style>