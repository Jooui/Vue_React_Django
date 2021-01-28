<template>
  <div id="nav" class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">Login</router-link>
    <router-link v-if="isAuthenticated" :to="{ name: 'Profile' }">Profile</router-link>
  </div>
</template>




<script>
import { mapGetters } from "vuex";
  export default {
    name: "Header",
    computed: {
      ...mapGetters(["currentUser", "isAuthenticated"])
    }
  }
</script>