<template>
  <div id="app">
    <Header title="Where in the World?"/>
    <router-view></router-view>  
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="sass">
  body
    margin: 0
  #app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #ffffff
</style>
