<template>
  <div class="innerTile">
    <h1>Inner Tile</h1>
    <button @click="ChangeTileText()">inner tile button..</button>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg: '',
      }
    },
    methods: {
      ChangeTileText: function () {
        this.$store.dispatch("changeHomeText", "Hi from inner tile..");
      }
    }
  }
</script>

<style scoped>

</style>
