<template>
  <div>
    <Header/>
    <router-view/>
  </div>

</template>
<script>
import Header from "@/components/layout/header";
export default {
  
  name: 'App',
  components: {
    Header
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
