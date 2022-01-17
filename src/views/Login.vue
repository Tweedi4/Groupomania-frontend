<template>
<div class="card">
    <section class="card__wrapper">
            <img class="logoIcon" src="../assets/icon.svg">
            <h3 class="card__title">Connexion</h3>
            <p class="card__subtitle">Vous avez déjà un compte? <span class="card__action">Se connecter</span></p>
            <form method="post" action="" @submit="login">
              <input v-model="email" type="email" name="email" maxlength="100" required placeholder="Adresse email" class="text-field" />
              <input v-model="password" type="password" name="password" maxlength="255" required placeholder="Password" class="text-field" />
            <button class="btn-confirmation">Se connecter</button>   
            </form>        
    </section>
</div>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
          email:'',
          password: ''
      }
  },

  methods: {

  }
}
</script>

<style scoped>


.card {
    display: flex;
    justify-content: center;
}

.card__wrapper {
  width: 621px;
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