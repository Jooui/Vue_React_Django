<template>
  <div>
    <h1>Login</h1>
    <ul v-if="errors" class="error-messages">
      <li v-for="(value, key) in errors" :key="key">{{ key+": "+value }}</li>
    </ul>
    <form v-if="!isAuthenticated" novalidate @submit.prevent="onSubmit(email, password)">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          v-model="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success" value="Login" />&nbsp;
        <router-link class="btn btn-info" to="/">Cancel</router-link>&nbsp;
      </div>
    </form>
    <div v-else>
     
      <input type="button" class="btn btn-success" @click="getCurrentUser" value="Current User" />
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue";
import store from "@/store";
import { mapGetters } from "vuex";

// if (store.getters.isAuthenticated) {
//   this.$router.push({ name: "Profile" })
// }

export default {
  data() {
    //si esta logeado no puede acceder al login
    if(store.getters.isAuthenticated){
      this.$router.push({ name: "Profile" })
    }
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit(email,password) {
      // const model = { user: { email: "", password: "" } };
      store.dispatch("login", { user: { email, password } }).then(() => this.$router.push({ name: "Home" }));
    },
    logout(){
      store.dispatch("logout").then(() => console.log("LOGOUT"))
    },
    getCurrentUser(){
      console.log(this.currentUser.email);
    },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated","errors"]),
  }
};
</script>