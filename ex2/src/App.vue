<template>
  <div id="app">
  <nav class="nav">
    <router-link to="/users">users</router-link>
    <router-link to="/todo">todo</router-link>
    <router-link to="/">home</router-link>
    <router-view/>
  </nav>
    
  </div>
</template>

<script>
export default {
  

}
</script>

<style lang="sass">
body
  font-family: Calibri, sans-serif
nav
  text-align: center
  padding-top: 50px

  a 
    padding: 10px 20px
    text-transform: uppercase

</style>
