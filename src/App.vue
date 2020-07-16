<template>
  <div id="app" v-bind:class="{white: isMode}">
    <Header title="Where in the World?"/>
    <router-view></router-view>  
  </div>
</template>

<script>

import Header from './components/Header';
import {bus} from './main.js';
export default {
  name: 'App',
  components: {
    Header
  },

  data() {
    return {
      isMode: false
    }
  },

  created() {
    bus.$on('toggle', (data) => {
        var _recent = this;
        _recent.isMode = data;
    });
  },
}
</script>

<style lang="sass">
  body
    margin: 0
    height: 100%
  html
    background: #202c37   
  #app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #ffffff
    height: 100%
  .white
    background: #f8f8f8
    color: black !important
</style>
