<template>
  <div class="row">
    <div class="gr-6 gr-12@mobile">
      <current-track></current-track>
      <audio-player></audio-player>
    </div>
    <div class="gr-6  gr-12@mobile">
      <playlist-component></playlist-component>
    </div>
  </div>
</template>

<script>
import CurrentTrack from './player-components/CurrentTrack';
import PlaylistComponent from './player-components/PlaylistComponent';
import AudioPlayer from './player-components/AudioPlayer';

export default {
  name: 'music-player',
  components: {
    'current-track': CurrentTrack,
    'audio-player': AudioPlayer,
    'playlist-component': PlaylistComponent,
  },
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
