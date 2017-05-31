<template>
  <div>
    <div class="row">
      <div class="gr-12">
      </div>
    </div>
    <div class="row">
      <div class="gr-4 player-control">
        <div v-on:click="previous" class="player-button">
          <i class="fa fa-step-backward" aria-hidden="true"></i>
        </div>
      </div>
      <div class="gr-4 player-control">
        <div v-on:click="pause" v-if="playing" class="player-button">
          <i class="fa fa-pause" aria-hidden="true"></i>
        </div>
        <div v-on:click="play" v-else class="player-button">
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
      </div>
      <div class="gr-4 player-control">
        <div v-on:click="next" class="player-button">
          <i class="fa fa-step-forward" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'audio-player',
  computed: {
    playing() {
      return this.$store.state.status === 1;
    },
  },
  methods: {
    play() {
      this.$store.commit('play');
    },
    pause() {
      this.$store.commit('pause');
    },
    next() {
      this.$store.dispatch('nextTrack');
    },
    previous() {
      this.$store.dispatch('prevTrack');
    },
    sayhi() {
      console.log('hi');
    },
    logSeek() {
      const howler = this.$store.state.howler;
      if (!howler || howler.state() === 'unloaded') {
        console.log(0);
      }
      console.log(howler.seek());
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../scss/colors.scss";
 i.fa {
   color: $primary-background;
   text-shadow: 2px 2px darken($primary-background, 50%);
 }
 .row {
   margin-top: 1.5em;
 }
 .player-control {
   font-size: 3em;
   text-align: center;
 }
 .progress-bar {
   width: 100%;
 }
 .player-button {
   &:hover {
     background-color: rgba(0,0,0, 0.2);
   }
   width: 1em;
   height: 1em;
   padding: .5em;
   border: 1px solid $primary-background;
   border-radius: 99px;
   margin: 0 auto;
 }
</style>
