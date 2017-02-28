<template>
  <nav>
    <div class="row">
      <div class="gr-4"></div>
      <div class="gr-4"><h1>Zack Low</h1></div>
      <div class="gr-4"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'fixed-nav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang='scss'>
@import "../scss/index.scss";
nav {
  text-align: center;
  background-color: $global-nav-background;
  font-family: 'Kaushan Script', cursive;
  min-height: $nav-min-height;
  width: 100%;
  position: fixed;
  top: 0;
  border-color: darken($global-nav-background, 20%);
  border-style: solid;
  border-width: 0 0 1px 0;
  @include box-shadow (0, -15px, 40px, #000)
  .row {
    height: $nav-min-height;
    align-items: center;
    .gr-* {
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
