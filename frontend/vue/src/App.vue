<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view/>
  </div>

</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.nav {
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
}
</style>
