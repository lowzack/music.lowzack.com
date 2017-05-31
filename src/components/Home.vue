<template>
  <div>
    <section class="hero-primary" v-bind:style="{ backgroundColor: playerColor }">
      <div class="container">
        <music-player></music-player>
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
import MusicPlayer from './MusicPlayer';

export default {
  name: 'hello',
  components: {
    'music-player': MusicPlayer,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    playerColor() {
      const trackIndex = this.$store.state.currentTrackIndex;
      return this.$store.state.playlist[trackIndex].backgroundColor;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/mixins.scss";
.hero-primary {
  background-image: url("https://www.transparenttextures.com/patterns/arabesque.png");
}
</style>
