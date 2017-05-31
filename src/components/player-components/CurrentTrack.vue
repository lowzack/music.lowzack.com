<template>
  <div>
    <img :src="song.image">
    <h2>{{song.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'current-track',
  computed: {
    song() {
      return this.$store.state.playlist[this.$store.state.currentTrackIndex];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h2 {
  margin-top: 1em;
}
div {
  text-align: center;
  color: white;
}
img {
  max-width: 50%;
  height: auto;
}
</style>
