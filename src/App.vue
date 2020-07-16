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
   
  #app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #ffffff
    height: 100%
    background: #202c37
  .white
    background: #f8f8f8 !important
    color: black !important
    .back-button
      background: #ffffff
      color: black
      border: 1px solid #ffffff
    .borders
        button
            background: #ffffff
            border: 1px solid #ffffff
            a
              color: black 
    .form-control
        background: #ffffff
        border: 1px solid white  
        color: black
    .form-control::placeholder
        color: black  
    .vs__dropdown-toggle
          background: #ffffff  
    .vs__search  
        border: none  
    .vs__search::placeholder
        color: black     
    .vs__dropdown-menu
        background: #ffffff
        color: black
    .vs__selected
        color: black        
    .country-wrapper
      background: #ffffff
      a
        color: black            
      
</style>
