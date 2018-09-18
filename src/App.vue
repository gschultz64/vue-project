<template>
  <div id="app">
    <img src="./assets/jeanlogo.jpg" alt="Site Logo">
    <Navigation />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#app img {
  width: 50%;
  text-align: center;
}
</style>
