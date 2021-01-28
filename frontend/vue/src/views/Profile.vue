<template>
    <div class="login_container">
        <span>Profile</span><br><br>
        <span>{{currentUser.email}}</span><br>
        <span>{{currentUser.username}}</span><br>
        <span>{{currentUser.image}}</span><br>
        
        
        <input type="button" class="btn btn-success" @click="logout" value="Logout" />
    </div>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  methods: {
    logout(){
      store.dispatch("logout").then(() => this.$router.push({ name: "Home" }))
    },
    // getCurrentUser(){
    //   console.log(this.currentUser.email);
    // },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated","errors"]),
  }
};


</script>
<style scoped>

</style>