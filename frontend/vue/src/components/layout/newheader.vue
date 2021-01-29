<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggler" data-toggle="open-navbar1">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <router-link :to="{ name: 'Home' }" class="mainHeader_option--link"><h4>Fitness<span>App</span></h4></router-link>
        
      </div>

      <div class="navbar-menu" id="open-navbar1">
        <ul class="navbar-nav">
          <li><a href="#">Home</a></li>
          <li class="navbar-dropdown">
            <div href="#" class="dropdown-toggler dropdown-title" data-dropdown="my-dropdown-id">
              Categories <i class="fa fa-angle-down"></i>
            </div>
            <ul class="dropdown" id="my-dropdown-id">
              <li><a href="#">Actions</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="separator"></li>
              <li><a href="#">Seprated link</a></li>
              <li class="separator"></li>
              <li><a href="#">One more seprated link.</a></li>
            </ul>
          </li>
          <li class="navbar-dropdown">
            <div href="#" class="dropdown-toggler dropdown-title" data-dropdown="blog">
              Blog <i class="fa fa-angle-down"></i>
            </div>
            <ul class="dropdown" id="blog">
              <li><a href="#">Some category</a></li>
              <li><a href="#">Some another category</a></li>
              <li class="separator"></li>
              <li><a href="#">Seprated link</a></li>
              <li class="separator"></li>
              <li><a href="#">One more seprated link.</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">
            <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">Login</router-link>
            <router-link v-if="isAuthenticated" :to="{ name: 'Profile' }">Profile</router-link>
          </a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "mainheader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  mounted() {
    let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
    let dropdownIsOpen = false;

    // Handle dropdown menues
    if (dropdowns.length) {

      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (event) => {
          let target = document.querySelector(
            "#" + event.target.dataset.dropdown
          );

          console.log(target);

          if (target) {
            if (target.classList.contains("show")) {
              target.classList.remove("show");
              dropdownIsOpen = false;
            } else {
              target.classList.add("show");
              dropdownIsOpen = true;
            }
          }
        });
      });
    }

    // Handle closing dropdowns if a user clicked the body
    window.addEventListener("mouseup", (event) => {
      if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
          let dropdown = document.querySelector(
            "#" + dropdownButton.dataset.dropdown
          );
          let targetIsDropdown = dropdown == event.target;

          if (dropdownButton == event.target) {
            return;
          }

          if (!targetIsDropdown && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
          }
        });
      }
    });

    // Open links in mobiles
    function handleSmallScreens() {
      document
        .querySelector(".navbar-toggler")
        .addEventListener("click", () => {
          let navbarMenu = document.querySelector(".navbar-menu");

          if (navbarMenu.style.display === "flex") {
            navbarMenu.style.display = "none";
            return;
          }

          navbarMenu.style.display = "flex";
        });
    }

    handleSmallScreens();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

$font-family: "Roboto", sans-serif;
$font-size-base: 0.925rem;
$base-color: #66f;
$text-dark: #3c4250;
$border-color: #ececec;

$navbar-body-color: #fff;
$navbar-link-hover: $base-color;
$navbar-dropdown-separator-color: #eee;
$navbar-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.035);

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: $font-family;
  font-size: $font-size-base;
}

a {
  text-decoration: none;
}

.container {
  width: 1170px;
  position: relative;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    left: 15px;
    right: 15px;
  }
}

// Start navbar

.navbar,
.navbar .container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
}

.navbar {
  padding: 1.15rem 1rem;
  box-shadow: $navbar-shadow;
  background-color: $navbar-body-color;

  .container {
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  /*
  |-----------------------------------
  | Start navbar logo or brand etc..
  |-----------------------------------
  */
  .navbar-header {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
    }

    .navbar-toggler {
      border-radius: 5px;
      background-color: transparent;
      cursor: pointer;
      border: none;
      display: none;
      outline: none;

      @media (max-width: 768px) {
        display: block;
      }

      span {
        height: 2px;
        width: 22px;
        background-color: lighten($text-dark, 35%);
        display: block;
      }
      span:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }

    > a {
      font-weight: 500;
      color: $text-dark;
    }
  }

  /*
  |-----------------------------------
  | Start navbar menu
  |-----------------------------------
  */
  .navbar-menu {
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
      text-align: center;
    }

    // Ul dropdown-title
    .navbar-nav {
      margin-left: auto;
      flex-direction: row;
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      @media (max-width: 768px) {
        width: 100%;
        display: block;
        border-top: 1px solid #eee;
        margin-top: 1rem;
      }

      > li {
        > a,.dropdown-title {
          color: $text-dark;
          text-decoration: none;
          cursor: pointer;
          display: inline-block;
          padding: 0.5rem 1rem;
          &:hover {
            color: $navbar-link-hover;
          }
          @media (max-width: 768px) {
            border-bottom: 1px solid #eee;
          }
        }
        &.active {
          a,.dropdown-title {
            color: $base-color;
          }
        }
      }

      .navbar-dropdown {
        .dropdown {
          list-style: none;
          position: absolute;
          top: 150%;
          left: 0;
          background-color: #fff;
          padding: 0.5rem 0;
          min-width: 160px;
          width: auto;
          white-space: nowrap;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          z-index: 99999;
          border-radius: 0.75rem;
          display: none;
          @media (max-width: 768px) {
            position: relative;
            box-shadow: none;
          }
          li {
            a,.dropdown-title {
              color: $text-dark;
              cursor: pointer;
              padding: 0.25rem 1rem;
              display: block;
            }
          }
          &.show {
            display: block !important;
          }
        }
      }

      .dropdown > .separator {
        height: 1px;
        width: 100%;
        margin: 9px 0;
        background-color: $navbar-dropdown-separator-color;
      }
    }
  }

  .navbar-dropdown {
    position: relative;
  }
}

// Custom
.navbar .navbar-header > a span {
  color: $base-color;
}
.navbar .navbar-header h4 {
  font-weight: 500;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
}
</style>
