<template>
  <div>
    <ul class="playlist">
      <li class="playlist-item" v-for="song in playlist">
        <div class="row">
          <div class="gr-4"><img :src="song.image"></div>
          <div class="gr-8">{{song.title}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'playlist',
  computed: {
    playlist() {
      return this.$store.state.playlist;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  li {
    color: white;
    padding: 1em 1em;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: white;
    &:last-child {
      border-width: 0;
    }
    &:hover {
      background-color: rgba(0,0,0, 0.2);
    }
  }
}
img {
  max-width: 100%;
}
</style>
