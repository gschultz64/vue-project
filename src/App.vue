<template>
  <div id="app" class="md-layout md-gutter md-alignment-center">
    <div>
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/Comics">Comics</router-link></li>
          <ul>
            <li><router-link to="/Comics/appalachian-rabbi-avatar-comic">Appalachian Rabbi Avatar Comic</router-link></li>
            <li><router-link to="/Comics/mlk-day-comic">MLK Day Comic</router-link></li>
          </ul>
        <li><router-link to="/Art">Art</router-link></li>
        <ul>
          <li><router-link to="/Art/cut-paper">Cut Paper</router-link></li>
          <li><router-link to="/Art/torah-ark">Torah Ark Project</router-link></li>
        </ul>
        <li><router-link to="/About">Bio + Contact</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <img class="logo  " src="./assets/jeanlogo.jpg" alt="Site Logo">    
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Home
  }
};
</script>

<style lang="scss">
body {
  background-image: url("./assets/lightpaperfibers.png");
  background-repeat: repeat;
}
#app {
  font-family: "Roboto", sans-serif;
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
.TreeNavigation {
  margin-top: 50px !important;
  float: left;
  text-align: left;
}
.logo {
  float: right !important;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.links {
  float: left;
}
</style>
