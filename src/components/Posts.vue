<template>
    <div class="container">
        <form>
            <img class="aviIcon">      
            <div>
                <div>{{pseudo}}</div>
                <h2>{{ title }}</h2>
                <p>{{ content }}</p>
            </div>
        </form>        
        <div>
            <h1>Ecrivez un commentaire</h1>
            <textarea class="text-field-text" placeholder="Ecrivez votre commentaire..."></textarea>
        </div>
    </div>
</template>
<script>

export default {
    name: "Post",
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
    },
}
</script>


<style scoped>
.container {
    width: 700px;
    height: auto;
    margin: 65px 112px;
    padding: 52px 72px 56px 62px;
    border-radius: 79px;
    justify-content: center;
    background-color: #AB3535;
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
.text-field-text {
    width: 500px;
    height: 150px;
}
</style>

