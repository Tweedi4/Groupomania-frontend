<template>
<div class="card">
    <section class="card__wrapper">
            <img class="logoIcon" src="../assets/icon.svg">
            <h3 class="card__title">Inscription</h3>
            <p class="card__subtitle">Vous avez déjà un compte? <a href="http://localhost:8080/login" class="card__action">Se connecter</a></p>
            <form class="form-user" action="" @submit.prevent>
              <input v-model="email" type="email" name="email" maxlength="100" required placeholder="Adresse email" class="text-field" />
              <input v-model="pseudo" type="text" name="pseudo" maxlength="36" required placeholder="Pseudo" class="text-field"/>
              <input v-model="password" type="password" name="password" maxlength="255" required placeholder="Password" class="text-field" /> 
            <button @click="signup()" class="btn-confirmation"  type="submit" >Créer un compte</button>
            </form>
            <p class="showError" id="error">{{error}}</p>  
    </section>
</div>
</template>

<script>

export default {
  name: 'Signup',
  data() {
    return {
        email:'',
        pseudo:'',
        password:'',
        error: '',
    };
  },

  methods: {
/*
       async login() {
      this.$store.dispatch('login', {email: this.email, password: this.password})
        .then(() => {this.$router.push("/");})
        .catch((error) => {
          console.log(error.response.data.error)
          this.error = error.response.data.error;
          });
    },
*/
   async signup() {

      this.$store.dispatch('signup', {email: this.email, pseudo: this.pseudo, password: this.password})
        .then(() => {this.$router.push("/login");})
        .catch((error) => {
          console.log(error.response.data.error)
          this.error = error.response.data.error;
          });
    },
  }
}
</script>

<style scoped>


.card {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 900px;
    max-height: 1200px;
}

.card__wrapper {
  margin: 20px;
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

.showError {
  position: relative;
  font-size: 18px;
  color: white;
  bottom: 60px;
  margin-left: 40px;
  margin-right: 40px;
}

@media (max-width: 400px) {
  .logoIcon {
  width: 138px;
  height: 138px;
  margin: 20px;
  border-radius: 108px;
  border: solid 1px white;
  justify-content: center;
  align-items: center;
}
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card__title {
  margin: 20px;
}

.card__wrapper {
  width: 350px;
  height: 625px;
  border-radius: 65px;
  background-color: #AB3535;
  margin: 30px;
}
.form-user {
    display: flex;
   flex-wrap: wrap;
   margin:10px;

}

.btn-confirmation {
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  top: 15px;
  border: none;
}
.btn-confirmation:hover {
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 16px;
  background-color: #ffd7d7;
  position: relative;
  top: 15px;
  border: none;
}
.showError {
  position: relative;
  font-size: 16px;
  color: white;
  bottom: 90px;
  margin-left: 10px;
  margin-right: 10px;
}


}
@media (max-width: 800px) {
    .logoIcon {
  width: 138px;
  height: 138px;
  margin: 20px;
}
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__wrapper {
  width: 350px;
  height: 700px;
  border-radius: 65px;
  background-color: #AB3535;
  margin: 20px;
}
.form-user {
    display: flex;
   flex-wrap: wrap;
   margin: 20px;

}
.btn-confirmation {
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  top: 60px;
  border: none;
}
.btn-confirmation:hover {
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 16px;
  background-color: #ffd7d7;
  position: relative;
  top: 60px;
  border: none;
}
.showError {
  position: relative;
  font-size: 16px;
  color: white;
  bottom: 90px;
  margin-left: 10px;
  margin-right: 10px;
}


}



</style>