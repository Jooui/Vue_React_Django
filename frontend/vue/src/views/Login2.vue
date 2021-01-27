<template>
    <div class="login_container">
        <span>LOGIN PAGE</span>
        <form @submit.prevent="onSubmit(email, password)">
        <fieldset class="form-group">
            <input
            class="form-control form-control-lg"
            type="text"
            v-model="email"
            placeholder="Email"
            />
        </fieldset>
        <fieldset class="form-group">
            <input
            class="form-control form-control-lg"
            type="password"
            v-model="password"
            placeholder="Password"
            />
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right">
            Sign in
        </button>
        </form>
    </div>
</template>
<script>
// import store from '../store/index'
import { mapActions } from "vuex";

    export default{
        name: "Login",
        data() {
            return {
                email: null,
                password: null
            };
        },
        methods: {
            ...mapActions([ 
                'login'
            ]),
            onSubmit(email, password) {
               this.login({email,password});
            },
        }
    }
</script>
<style scoped>

</style>