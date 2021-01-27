<template>
  <div>
    <h1>Login</h1>
    {{error}}
    <form novalidate @submit.prevent="onSubmit()">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          v-model="model.user.email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model="model.user.password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-success" value="Login" />&nbsp;
        <router-link class="btn btn-info" to="/">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
// import { reactive } from "vue";
import store from "@/store";
import { mapState } from "vuex";

export default {
  setup() {
    // console.log(email);
    const model = { user: { email: "", password: "" } };

    function onSubmit() {
      // console.log(model.user.email);
      store.dispatch("login", model).then(() =>{
        console.log(store.error);
      })
     
    }

    return {
      model,
      onSubmit,
    };
  },
  computed: {
    ...mapState({
      errors: state => state.error
    })
  }
};
</script>