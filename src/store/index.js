/* eslint no-param-reassign: ["error", { "props": false }] */
import Vuex from 'vuex';
import Vue from 'vue';
import { Howl } from 'howler';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 0,
    howler: undefined,
    currentTrackIndex: 0,
    playerId: undefined,
    playlist: [{
      id: 1,
      title: 'Track 1',
      file: 'http://localhost:8080/static/chill-jam-vox-1.m4a',
      image: 'http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg',
      backgroundColor: '#666666',
    }, {
      id: 2,
      title: 'Track 2',
      file: 'http://localhost:8080/static/beach-bass-1.m4a',
      image: 'http://img07.deviantart.net/6896/i/2016/122/f/6/scarlet_macaw_album_art_for_griffin_by_sylviaritter-da10rsg.png',
      backgroundColor: '#CCD232',
    }],
  },
  getters: {
    seekLocation(state) {
      if (!state.howler || state.howler.state() === 'unloaded') {
        return 0;
      }
      return state.howler;
    },
  },
  mutations: {
    play(state) {
      if (!state.howler || state.howler.state() === 'unloaded') {
        state.howler = new Howl({
          src: [state.playlist[state.currentTrackIndex].file],
          html5: true,
        });
        state.howler.once('load', () => {
          state.playerId = state.howler.play();
          state.trackDuration = state.howler.duration();
          state.status = 1;
        });
      } else {
        state.playerId = state.howler.play(state.playerId);
        state.status = 1;
      }
      return state;
    },
    pause(state) {
      state.howler.pause(state.playerId);
      state.status = 2;
      return state;
    },
    nextTrack(state) {
      const isLastTrack = state.currentTrackIndex + 1 > state.playlist.length - 1;
      if (isLastTrack) {
        state.currentTrackIndex = 0;
      } else {
        state.currentTrackIndex += 1;
      }
      if (state.howler.state() === 'loaded') {
        state.howler.unload();
      }
      return state;
    },
    prevTrack(state) {
      if (state.currentTrackIndex === 0) {
        state.currentTrackIndex = state.playlist.length - 1;
      } else {
        state.currentTrackIndex -= 1;
      }
      if (state.howler.state() === 'loaded') {
        state.howler.unload();
      }
      return state;
    },
  },
  actions: {
    nextTrack({ commit, state }) {
      commit('nextTrack');
      if (state.status === 1) {
        commit('play');
      }
    },
    prevTrack({ commit, state }) {
      commit('nextTrack');
      if (state.status === 1) {
        commit('play');
      }
    },
  },
});
