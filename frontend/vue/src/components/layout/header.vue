<template>
  <div id="nav" class="mainHeader">

    <div class="mainHeader_left">
      <div>
        <span class="app_Title">Training App</span>
      </div>
    </div>

    <div class="mainHeader_center">
      <div class="mainHeader_option">
        <router-link :to="{ name: 'Home' }" class="mainHeader_option--link">Home</router-link>
      </div>
      <div class="mainHeader_option">
        <router-link :to="{ name: 'About' }" class="mainHeader_option--link">Trainings</router-link>
      </div>
      <div class="mainHeader_option">
        <router-link :to="{ name: 'About' }" class="mainHeader_option--link">Exercices</router-link>
      </div>
      <div class="mainHeader_option">
        <router-link :to="{ name: 'About' }" class="mainHeader_option--link">Home</router-link>
      </div>

    </div>

    <div class="mainHeader_right">
      <div>
        <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">Login</router-link>
        <router-link v-if="isAuthenticated" :to="{ name: 'Profile' }">Profile</router-link>
      </div>
    </div>
    

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

<style>
  @import './header.css';
</style>
