<template>
  <div id="app">
    <router-view/>
    <div>
      <h1>{{getTitle}}</h1>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: '',
      }
    },
    computed: {
      getTitle: function () {
        return this.$store.state.titleText;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
