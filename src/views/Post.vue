<template>
<div class="container">
    <img class="aviIcon">
    <h1 class="pseudo">Pseudo</h1>
    <section>
        <div>
            <input class="text-field-title" placeholder="Titre" />  
        </div>
        <div>
            <textarea class="text-field-text" placeholder="Ecrivez votre message..."></textarea>
        </div>
        <div class="send-text">
            <img>
            <button class="btn-send">Envoyer</button>
        </div>
    </section>
</div>
</template>
<script>

export default {
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

</style>>