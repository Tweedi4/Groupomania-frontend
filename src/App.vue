<template>
  <div id="app">
    <Home />
      <router-view />
  </div>
</template>


<script>

export default {
  name:'App',
  components: {
    
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },

}

</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.btn-send {
    width: 100px;
    height: 50px;
    border-radius: 16px;
    margin: 20px;
    border: none;
}


</style>
