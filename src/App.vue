<template>
  <div id="app">
    <NavBar/>
    <SideBar @createUser="handleCreate" @viewUser="handleView"/>
    <router-view  ref="component"/>
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
  },
  methods: {
    handleCreate(){
      this.$children[2].form = true;
    },
    handleView(){
      this.$children[2].form = false;
    }
  },
}
</script>

<style>
body{
  margin: 0%;
  padding: 0%
}
</style>
