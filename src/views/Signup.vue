<template>
<div class="card">
    <section class="card__wrapper">
            <img class="logoIcon" src="../assets/icon.svg">
            <h3 class="card__title">Inscription</h3>
            <p class="card__subtitle">Vous avez déjà un compte? <a href="http://localhost:8080/login" class="card__action">Se connecter</a></p>
            <form action="" @submit.prevent>
              <input v-model="email" type="email" name="email" maxlength="100" required placeholder="Adresse email" class="text-field" />
              <input v-model="pseudo" type="text" name="pseudo" maxlength="36" required placeholder="Pseudo" class="text-field"/>
              <input v-model="password" type="password" name="password" maxlength="255" required placeholder="Password" class="text-field" /> 
            <button @click="signup()" class="btn-confirmation"  type="submit" >Créer un compte</button>
            </form>
            <p v-if="showError" id="error">Cet utilisateur existe déjà</p>  
    </section>
</div>
</template>

<script>
import userServices from "@/services/userServices.js";

export default {
  name: 'Signup',
  data() {
    return {
        email:'',
        pseudo:'',
        password:'',
    };
  },

  methods: {
   async signup() {
     try {
       await userServices.signup(
       this.email,
       this.pseudo,
       this.password,
     );
     this.$router.push("/login");  
     } catch(error) {
    console.log(error)
    }
  }


  }
}
</script>

<style scoped>


.card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__wrapper {
  width: 600px;
  height: 809px;
  border-radius: 65px;
  background-color: #AB3535;
}

.card__action {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.logoIcon {
  width: 138px;
  height: 138px;
  margin: 10px 177px 33px 168px;
  border-radius: 108px;
  border: solid 1px white;
  justify-content: center;
  align-items: center;
}

.text-field {
  width: 450px;
  height: 54px;
  margin: 10px;
  padding: 5px;
  border-radius: 16px;
  background-color: #fff;
  border: none;
}

.btn-confirmation {
  width: 450px;
  height: 50px;
  margin: 10px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  top: 80px;
  border: none;
}
.btn-confirmation:hover {
  width: 450px;
  height: 50px;
  margin: 10px;
  border-radius: 16px;
  background-color: #ffd7d7;
  position: relative;
  top: 80px;
  border: none;
}



</style>