<template>
  <div>
    <!-- <suspense> -->
      <MainHeader />
      <transition
        name="router-anim"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    <!-- </suspense> -->
  </div>
</template>
<script>
import MainHeader from "@/components/layout/header";
import "./App.css";
// import Headersax from "@/components/layout/headersax";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
/* @import './App.css'; */
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

@font-face {
  font-family: "PoppinsBold";
  src: local("PoppinsBold"),
    url(./assets/fonts/poppins/Poppins-Bold.ttf) format("truetype");
}

body {
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

.nav a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.nav a:hover {
  background-color: #111;
}

/* Page transition */

.animated {
  transition-duration: 100ms;
}

.fadeInDown {
  transition-duration: 100ms;
}

.fadeOutDown {
  transition-duration: 100ms;
}

.router-anim-enter-active,
.router-anim-leave-active {
  transition: all 100ms ease;
}

/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
</style>
