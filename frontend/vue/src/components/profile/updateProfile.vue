<template>
  <div class="update_body">
    <div class="login-box">
      <h2>Update profile</h2>
      <div v-if="errors" class="error-messages">
        <span class="error-msg" v-for="(value, key) in errors" :key="key">
          {{ key + ": " + value }}
        </span>
      </div>
      <form @submit.prevent="onSubmit(username, email, bio, image)">
        <div class="user-box">
          <input
            name="username"
            v-model="username"
            type="username"
            pattern=".{4,}"
            required
          />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input
            name="mail"
            v-model="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input name="bio" v-model="bio" type="text" />
          <label>Bio</label>
        </div>
        <div class="user-box">
          <input name="image" v-model="image" type="text" />
          <label>Image URL</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button type="submit" class="button--update">
            <p class="button-text">UPDATE</p>
          </button>
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
export default {
  name: "UpdateProfile",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated", "errors"]),
  },
  data() {
    return {
      username: "",
      email: "",
      bio: "",
      image: "",
    };
  },
  mounted: function() {
    this.username = this.currentUser.username;
    this.email = this.currentUser.email;
    this.bio = this.currentUser.bio;
    this.image = this.currentUser.image;
  },
  methods: {
    onSubmit(username, email, bio, image) {
      store
        .dispatch("update_user", { user: { email, username, bio, image } })
        .then(() => {
          console.log("success");
          setTimeout(() => {
            location.reload();
          }, 1500);
        });
    },
  },
};
</script>

<style lang="scss">
.button--update {
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-family: var(--body-font);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}
.update_body {
  display: flex;
  align-content: center;
  justify-content: center;
}
.login-box {
  margin: 20px;
  width: 600px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: rgb(0, 0, 0);
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f13a2f;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f13a2f;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #f13a2f;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f13a2f, 0 0 25px #f13a2f, 0 0 50px #f13a2f,
    0 0 100px #f13a2f;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f13a2f);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f13a2f);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f13a2f);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f13a2f);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
