<template>
<Header/>
<div class="card">
    <section class="card__wrapper">
        <img class="aviIcon">
        <button class="aviButton">Choisir son avatar</button>
        <h1>Pseudo</h1>
        <div>
            <input v-model="email" type="email" name="email" maxlength="100" required placeholder="Adresse email" class="text-field" />
            <input  v-model="pseudo" type="text" name="pseudo" maxlength="36" required placeholder="Pseudo" class="text-field"/>
            <button class="deleteButton">Supprimer son compte</button>
        </div>
    </section>
</div>
</template>

<script>
import Header from '@/components/Header';

export default {
    components: {
        Header,

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
  right: 80px;
}

.aviButton {
  align-items: bottom;
  margin: 20px;
  position: relative;
  top: 100px;
  right: 230px;
}

.textPseudo {
  width: 127px;
  height: 52px;
  margin: 45px 190px 56px 31px;
  font-size: 39px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}

.text-field {
  width: 450px;
  height: 54px;
  margin: 20px;
  padding: 5px;
  border-radius: 16px;
  background-color: #fff;
  border: none;
}

.deleteButton {
    width: 200px;
    height: 60px;
    border-radius: 33px;
    background-color: #fff;
    border: none;
    position: relative;
    margin-top: 30px;
}

</style>
