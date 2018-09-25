<template>
  <div class="home">
    <div class="yad-info">
      <h3>Yad</h3>
      <p>On this site the pointer indicates another layer of meaning. Click the text or image pointed to when you want to go deeper.</p>
      <img class="yad-left" src="../assets/yadL.jpg" alt="left yad"/>
    </div>
    <img src="../assets/hineini.jpg" alt="Hineini by Jean Eglinton">
  </div>
</template>

<script>
import Vue from "vue";
import MdButton from "vue-material/dist/components/MdButton";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdButton);

export default {
  name: "Home"
};
</script>
 

<style lang="scss" scoped>
.yad-info {
  border: 2px solid grey;
  width: 30%;
}
.yad-left {
  width: 30% !important;
}
</style>

