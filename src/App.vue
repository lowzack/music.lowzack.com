<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from 'components/Navbar';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
  },
};
</script>

<style lang='scss'>
@import "scss/index.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: $nav-min-height 0 0 0;
}
</style>
