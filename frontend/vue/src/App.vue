<template>
  <div>
    <div id="nav" class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
    <router-view/>
  </div>

</template>
<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav a{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav a:hover {
  background-color: #111;
}
</style>
