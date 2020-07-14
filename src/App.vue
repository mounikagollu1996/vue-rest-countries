<template>
  <div id="app">
    <router-view></router-view>
    <Header title="Where in the World?"/>
    <Countries/>
  </div>
</template>

<script>

import Header from './components/Header';
import Countries from './components/Countries'

export default {
  name: 'App',
  components: {
    Countries,
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
