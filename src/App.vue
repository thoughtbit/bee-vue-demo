<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import './container/index.scss'
export default {
  name: 'app',
};
</script>

<style lang="scss">
// @import "./container/index.scss";
$color-text: #2c3e50;
#app {
  text-align: center;
  color: $color-text;
  margin-top: 60px;
}
</style>
