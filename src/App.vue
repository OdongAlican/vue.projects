<template>
  <div id="app">
    <NavBar/>
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style>
body{
  margin: 0%;
  padding: 0%
}
</style>
