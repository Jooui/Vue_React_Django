<template>
  <div class="login_page_content">
    <!--<div><h1>Fitness<span>App</span></h1></div>-->
    <div class="login_page_background" v-bind:style="bgImage"></div>
    <div id="login" class="login">
      <div class="form">
        <h2>Login</h2>
        <div v-if="errors" class="error-messages">
          <span class="error-msg" v-for="(value, key) in errors" :key="key">
            {{ key + ": " + value }}
          </span>
        </div>
        <form
          novalidate
          @submit.prevent="onSubmit(email, password)"
        >
          <div class="form-field">
            <label for="login-mail"><i class="fas fa-envelope"></i></label>
            <input
              id="login-mail"
              type="text"
              name="mail"
              placeholder="E-Mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              v-model="email"
            />
            <svg>
              <use href="#svg-check" />
            </svg>
          </div>
          <div class="form-field">
            <label for="login-password"><i class="fa fa-lock"></i></label>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Password"
              pattern=".{8,}"
              required
              v-model="password"
            />
            <svg>
              <use href="#svg-check" />
            </svg>
          </div>
          <button type="submit" class="button">
            <div class="arrow-wrapper">
              <span class="arrow"></span>
            </div>
            <p class="button-text">SIGN IN</p>
          </button>
          <router-link :to="{ name: 'Register' }">Create account</router-link>
        </form>
      </div>

      <div class="finished">
        <svg>
          <use href="#svg-check" />
        </svg>
      </div>
    </div>
    <!-- //--- ## SVG SYMBOLS ############# -->
    <svg style="display: none">
      <symbol id="svg-check" viewBox="0 0 130.2 130.2">
        <polyline points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </symbol>
    </svg>
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
    if (store.getters.isAuthenticated) {
      this.$router.push({ name: "Profile" });
    }
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit(email, password) {
      var element = document.getElementById("login");
      element.classList.add("loading");
      setTimeout(() => {
        element.classList.remove("loading");
        store.dispatch("login", { user: { email, password } }).then(() => {
          element.classList.add("active");
          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 1500);
        });
      }, 1500);
    },
    logout() {
      store.dispatch("logout").then(() => console.log("LOGOUT"));
    },
    getCurrentUser() {
      console.log(this.currentUser.email);
    },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated", "errors"]),
    bgImage() {
      return {
        backgroundImage: `url${require('../../assets/gym_wallpaper.jpg')}`
      };
  }
  },
};
</script>

<style>

.error-messages {
  display: flex;
  flex-direction: column;
  margin-top: -18px;
}
/* .login_page_content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://wallpaperaccess.com/full/1350197.jpg");
  background-position: center;
  background-size: cover;
  filter: blur(3px);
} */
.login_page_content {
  /* width: 100vh; */
  height: 100vh;
  width: 100;
  /* height: 100%; */
  font-family: "Poppins-Bold", sans-serif;
  font-size: 16px;
  /* background-image: linear-gradient(
      rgba(221, 221, 221, 0.514),
      rgba(221, 221, 221, 0.514)
    ),
    url("https://wallpaperaccess.com/full/1350197.jpg");
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(15px); */
}

.login_page_background {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(58, 59, 58, 0.158),
      rgba(17, 17, 17, 0.514)
    ),
    url("https://wallpaperaccess.com/full/1350197.jpg");
  background-position: center;
  background-size: cover;
}

.login {
  width: 420px;
  background: #ffffff;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 12px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login:before {
  content: "";
  position: absolute;
  background: transparent;
  bottom: 45px;
  right: 40px;
  width: 55px;
  height: 55px;
  z-index: 5;
  transition: all 0.6s ease-in-out, background 0s ease;
}
.login .form {
  display: block;
  position: relative;
}
.login .form h2 {
  background: #f5f5fa;
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 40px;
  font-weight: 300;
  color: #84868f;
  font-size: 19px;
}
.login .form .form-field {
  display: flex;
  align-items: center;
  height: 55px;
  margin: 0 40px 30px 40px;
  border-bottom: 1px solid #7e7f8a;
}
.login .form .form-field label {
  width: 10px;
  padding: 0 15px 0 0;
  color: #9596a2;
}
.login .form .form-field input {
  width: 100%;
  background: transparent;
  color: #9596a2;
  padding: 15px;
  border: 0;
  margin: 0;
}
.login .form .form-field input + svg {
  width: 35px;
  width: 35px;
  fill: none;
  stroke: #00fcd1;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: -100;
  transition: all 0.3s ease-in-out;
}
.login .form .form-field input:valid + svg {
  stroke-dashoffset: 0;
}
.login .form .form-field input:focus {
  outline: none;
}
.login .form .form-field *::placeholder {
  color: #9596a2;
}
.login .form .button {
  width: 100%;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 40px 45px 40px;
  margin: 0;
  border: 0;
  background: transparent;
  outline: none;
}
.login .form .button .arrow-wrapper {
  transition: all 0.45s ease-in-out;
  position: relative;
  margin: 0;
  width: 100%;
  height: 55px;
  right: 0;
  float: right;
  background: linear-gradient(90deg, #04dfbd, #00fcd1);
  box-shadow: 0 3px 20px rgba(0, 252, 209, 0.4);
  border-radius: 12px;
}
.login .form .button .arrow-wrapper .arrow {
  position: absolute;
  top: 50%;
  margin: auto;
  transition: all 0.45s ease-in-out;
  right: 35px;
  width: 15px;
  height: 2px;
  background: none;
  transform: translateY(-50%);
}
.login .form .button .arrow-wrapper .arrow:before {
  position: absolute;
  content: "";
  top: -4px;
  right: 0;
  width: 8px;
  height: 8px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}
.login .form .button .button-text {
  transition: all 0.45s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  color: #fff;
  line-height: 55px;
  text-align: center;
  text-transform: uppercase;
}
.login .finished {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
}
.login .finished svg {
  width: 100px;
  width: 100px;
  fill: none;
  stroke: #fff;
  stroke-width: 7;
  stroke-linecap: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: -100;
  transition: all 0.3s ease-in-out 0.5s;
}
.login.loading .form .button .arrow-wrapper {
  width: 55px;
  animation: sk-rotateplane 1.2s infinite ease-in-out 0.5s;
}
.login.loading .form .button .arrow-wrapper .arrow {
  background: #fff;
  transform: translate(15px, 0);
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0.5s;
}
.login.loading .form .button .button-text {
  color: #9596a2;
}
.login.active:before {
  bottom: 0;
  right: 0;
  background: linear-gradient(90deg, #04dfbd, #00fcd1);
  border-radius: 12px;
  height: 100%;
  width: 100%;
}
.login.active .form .button .arrow-wrapper {
  animation-iteration-count: 1;
}
.login.active .finished svg {
  stroke-dashoffset: 0;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    transform: perspective(120px);
  }
  50% {
    transform: perspective(120px) rotateY(180deg);
  }
  100% {
    transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
</style>
