<template>
  <div>
    <section class="hero-primary">
      <div class="container">
        <h1 class="center">{{ msg }}</h1>
      </div>
    </section>
    <section class="primary">
      <div class="container">
        <h1 class="highlighted-primary">{{ msg }}</h1>
      </div>
    </section>
    <section class="secondary">
      <div class="container">
        <h1 class="highlighted-primary">{{ msg }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/mixins.scss";
.hero-primary {
}
</style>
