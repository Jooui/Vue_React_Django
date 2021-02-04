<template>
  <div class="video-app">
    <div class="dark-light">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div class="wrapper">
      <div class="main-container">
        <div class="profile">
          <img
            src="https://images.unsplash.com/photo-1559543434-3e99643d333d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
            class="profile-cover"
          />

          <div class="profile-info">
            <div class="profile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 469.33 469.33"
                fill="currentColor"
              >
                <path
                  d="M320 213.33c35.3 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 213.33c35.31 0 63.79-28.69 63.79-64 0-35.3-28.48-64-63.79-64-35.3 0-64 28.7-64 64 0 35.31 28.7 64 64 64zM149.33 256C99.52 256 0 280.96 0 330.67V384h298.67v-53.33c0-49.71-99.52-74.67-149.34-74.67zM320 256c-6.19 0-13.12.43-20.59 1.17 24.75 17.82 41.92 41.82 41.92 73.5V384h128v-53.33c0-49.71-99.52-74.67-149.33-74.67z"
                />
              </svg>
              1,702
            </div>
            <div class="profile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 469.33 469.33"
              >
                <path
                  d="M234.67 170.67c-35.31 0-64 28.69-64 64s28.69 64 64 64 64-28.7 64-64-28.7-64-64-64z"
                />
                <path
                  d="M234.67 74.67C128 74.67 36.9 141 0 234.67c36.9 93.65 128 160 234.67 160 106.77 0 197.76-66.35 234.66-160-36.9-93.66-127.89-160-234.66-160zm0 266.66c-58.88 0-106.67-47.78-106.67-106.66S175.79 128 234.67 128s106.66 47.79 106.66 106.67-47.78 106.66-106.66 106.66z"
                />
              </svg>
              1,503
            </div>
            <div class="profile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 475.43 475.43"
              >
                <path
                  d="M306.9 164.57l78.9-86.2a7.83 7.83 0 001.56-8.36 8.36 8.36 0 00-7.3-4.7h-253.4s-3.13 0-3.13.52v-9.4a26.12 26.12 0 0021.94-27.7A28.73 28.73 0 00117.26 0a29.78 29.78 0 00-29.78 28.73 30.82 30.82 0 0020.37 27.7v411.16a7.84 7.84 0 0015.68 0V263.84h256.52c3.2.2 6.17-1.7 7.31-4.7a8.36 8.36 0 00-1.56-8.36l-78.9-86.2z"
                />
              </svg>
              Sep 21
            </div>
            <div class="profile-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 411.14 411.14"
              >
                <path
                  d="M350.2 54.53H61.45C27.64 54.53 0 82.18 0 115.97v179.2c0 33.8 27.65 61.44 61.44 61.44H349.7c33.79 0 61.44-27.65 61.44-61.44v-179.2c.5-33.8-27.14-61.44-60.93-61.44zM287.75 210.7a11.96 11.96 0 01-3.58 3.59l-119.3 70.65a9.93 9.93 0 01-13.82-3.58 8.65 8.65 0 01-1.54-5.12V134.92c0-5.64 4.61-10.24 10.24-10.24 1.54 0 3.59.5 5.12 1.53l119.3 70.66c4.6 3.07 6.66 9.21 3.58 13.82z"
                />
              </svg>
              234
            </div>
          </div>
          <div class="profile-menu">
            <div class="profile-avatar">
              <img class="profile-img" src="{{currentUser.image}}" alt="" />
              <div class="profile-name">{{ currentUser.username }}</div>
            </div>
            <div class="menu-items">
              <a class="profile-menu-link ">Main</a>
              <a class="profile-menu-link active">Videos</a>
              <a class="profile-menu-link">Playlists</a>
              <a class="profile-menu-link">About</a>
            </div>
            <div class="follow-buttons">
              <button class="follow">645,321</button>
              <button class="follow follow-option">Follow</button>
            </div>
          </div>
        </div>
        <div class="videos">
          <div class="video">
            <div class="video-time">15.13</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/368244254.sd.mp4?s=2dc98d46cc5c55913b309928d1d14769f76bc6f9&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Planning Helps Make</div>
            <div class="view">15.4k views</div>
          </div>
          <div class="video">
            <div class="video-time">13.10</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/356200184.sd.mp4?s=f528556cafba1d369984dc341104e7eef8bb71bb&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">This Is Cloaud Break</div>
            <div class="view">13.2k views</div>
          </div>
          <div class="video">
            <div class="video-time">15.30</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/364324653.sd.mp4?s=7ded2b451ac7f5dfaf1375277aa0308cdf5d011c&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Lost Your Mind</div>
            <div class="view">11.7k views</div>
          </div>
          <div class="video">
            <div class="video-time">11.30</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/399004885.sd.mp4?s=1d39443bef9856dacc4d3ba2c6be0881e38b7e66&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Planning Helps Make</div>
            <div class="view">9.2k views</div>
          </div>
          <div class="video">
            <div class="video-time">6.35</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/353556576.sd.mp4?s=8e942d8680fe908418143e63e04b8798982d5bea&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Research In Advertising</div>
            <div class="view">18.4k views</div>
          </div>
          <div class="video">
            <div class="video-time">2.21</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/368556609.sd.mp4?s=3fa896a1d6d8c04382a9b8f33053d2eaabe4342b&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">See The Unmatched</div>
            <div class="view">3.4k views</div>
          </div>
          <div class="video">
            <div class="video-time">12.10</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/285489976.sd.mp4?s=4fa6461f93f18e0d6cfc30461fffb05311d60a28&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Dance In The Air</div>
            <div class="view">17.4k views</div>
          </div>
          <div class="video">
            <div class="video-time">7.50</div>
            <video muted>
              <source
                src="https://player.vimeo.com/external/325725646.sd.mp4?s=763c0f293299052689f8344b3a155ea2b4a1c92b&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="video-content">Sadness Will Last Forever</div>
            <div class="view">12.6k views</div>
          </div>
        </div>
        <div class="load-more">
          <!-- <svg id="me" xmlns="http://w3.org/2000/svg" viewBox="0 0 341.333 341.333" fill="currentColor">
        <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
        </svg> -->
          Load More
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  methods: {
    logout() {
      store.dispatch("logout").then(() => this.$router.push({ name: "Home" }));
    },
    // getCurrentUser(){
    //   console.log(this.currentUser.email);
    // },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated", "errors"]),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap");

:root {
  --body-font: "Manrope", sans-serif;
  --body-color: #b3b3b3;
  --body-bg-color: #f2f2f2;
  --theme-bg-color: #fafafa;
  --border-color: #efefef;
  --logo-color: #f13a2f;
  --main-color: #808080;
  --header-bg-color: #fff;
}

.dark-mode {
  --body-bg-color: #1e222b;
  --theme-bg-color: #212835;
  --border-color: #393f50;
  --header-bg-color: #323a4b;
  --main-color: #fefffd;
  --body-color: #dddee0;
}
* {
  outline: none;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: var(--body-font);
  font-size: 15px;
  color: var(--body-color);
  background-color: var(--body-bg-color);
  margin: 0;
  font-weight: 600;
  min-height: -webkit-fill-available;
}

.video-app {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

.header {
  height: 90px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  background-color: var(--header-bg-color);
  align-items: center;
  padding: 0 25px;
  color: var(--body-color);
  font-size: 15px;
}

.header-left {
  display: flex;
  align-items: center;
  svg {
    width: 22px;
    margin-right: 25px;
    flex-shrink: 0;
  }
}

.logo {
  width: 34px;
  height: 34px;
  border: 5px solid var(--logo-color);
  border-radius: 50%;
  flex-shrink: 0;
}

.header-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  height: 100;
  padding: 0 15px;
}

.menu-item {
  &:hover {
    color: var(--logo-color);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
}

.user-settings {
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-shrink: 0;
  & > * + * {
    margin-left: 18px;
  }
}

.user-settings svg {
  width: 22px;
  flex-shrink: 0;
}

.button {
  display: flex;
  background-color: transparent;
  align-items: center;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  color: var(--body-color);
  padding: 8px 16px;
  font-family: var(--body-font);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  svg {
    margin-right: 8px;
    width: 20px;
    fill: var(--body-color);
  }
}
.search-bar {
  height: 90px;
  position: relative;
  input {
    height: 100%;
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    padding: 0 10px 0 54px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='18' height='18' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cpath d='M18.5 17h-.79l-.28-.27a6.5 6.5 0 10-.7.7l.27.28v.79l5 4.99L23.49 22l-4.99-5zm-6 0a4.5 4.5 0 11-.01-8.99A4.5 4.5 0 0112.5 17z' id='a'/%3e%3c/defs%3e%3cg transform='translate(-6 -6)' fill='none' fill-rule='evenodd'%3e%3cmask id='b' fill='%23fff'%3e%3cuse xlink:href='%23a'/%3e%3c/mask%3e%3cg mask='url(%23b)' fill='%23D8D8D8'%3e%3cpath d='M3 3h24v24H3z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 25px 50%;
    color: #7c7c7c;
    &::placeholder {
      color: var(--body-color);
    }
  }
}

.user-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  + svg {
    width: 14px;
  }
}

.notify {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: var(--logo-color);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: -6px;
    bottom: 15px;
  }
}

.menu-item.active {
  color: var(--logo-color);
}

.wrapper {
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: auto;
  background-color: var(--theme-bg-color);
}

.side-wrapper:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}

.side-wrapper svg {
  width: 20px;
  fill: var(--body-color);
  margin-right: 25px;
  flex-shrink: 0;
}

.username {
  color: var(--main-color);
  font-size: 15px;
}

.side-menu a {
  text-decoration: none;
  font-weight: 500;
  color: var(--main-color);
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.side-menu {
  padding: 20px;
}

.side-title {
  padding: 0 0 20px;
  font-size: 15px;
}

.user {
  display: flex;
  align-items: center;
}

.user + .user {
  margin-top: 15px;
}

.user-img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 16px;
  object-fit: cover;
  object-position: center;
}

.show-more {
  margin-top: 20px;
  padding: 12px 16px;
}

.left-side {
  width: 270px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  overflow: auto;
  flex-shrink: 0;
}

.main-container {
  padding: 25px;
  flex-grow: 1;
  overflow: auto;
}

.profile {
  height: 45vh;
  max-height: 350px;
  min-height: 270px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.profile-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px 4px 6px 6px;
}

.profile-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-bg-color);
  width: 100%;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
  padding: 0 25px;
  z-index: 2;
}

.profile-img {
  border-radius: 50%;
  width: 42px;
  height: 42px;
  object-fit: cover;
  margin-right: 15px;
}

.profile-avatar {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.profile-name {
  white-space: nowrap;
}

.menu-items {
  display: flex;
  cursor: pointer;
}

.profile-menu-link {
  padding: 20px;
  transition: 0.2s;
  &.active,
  &:hover {
    border-bottom: 3px solid var(--logo-color);
    color: var(--logo-color);
  }
}

.profile-info {
  justify-content: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 2;
}

.profile-name {
  color: var(--main-color);
}

.profile-item {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 26px 16px;
  white-space: nowrap;
  svg {
    width: 22px;
    margin-right: 10px;
  }
}

.profile-contact-info {
  position: absolute;
  display: flex;
  right: 10px;
  top: 20px;
  color: #fff;
  svg {
    width: 18px;
  }
}

.profile-contact {
  border: 1px solid rgba(239, 239, 239, 0.3);
  padding: 16px;
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.follow-buttons {
  display: flex;
}

.follow {
  border: 2px solid var(--border-color);
  border-radius: 25px 0 0 25px;
  color: var(--body-color);
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: var(--header-bg-color);
  }
}

.follow-option {
  border-radius: 0 25px 25px 0;
  margin-left: -2px;
}

.trends {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 45px;
  a {
    text-decoration: none;
    color: var(--body-color);
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap;
  }
}

.trends svg {
  width: 20px;
  margin-right: 16px;
}

.follow-option.active {
  background-color: var(--header-bg-color);
  margin-left: -3px;
}

.play-all {
  background-color: var(--logo-color);
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  svg {
    width: 12px;
    flex-shrink: 0;
    margin-right: 8px;
  }
}

.videos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.video video {
  transition: 0.4s;
  max-width: 100%;
  display: block;
  border-radius: 4px 4px 0 0;
}

.video {
  overflow: hidden;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
  background-color: var(--header-bg-color);
  cursor: pointer;
  &:hover .video-time {
    opacity: 0;
  }
  &:hover video {
    transform: scale(1.4);
    transform-origin: center;
  }
  &:hover .view {
    padding: 10px;
  }
}

.video-time {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
  bottom: 80px;
  right: 6px;
  transition: 0.3s ease-in;
}

.video-content {
  width: 100%;
  color: var(--main-color);
  padding: 15px 10px 0;
  border-radius: 0 0 4px 4px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.view {
  padding: 10px;
  position: relative;
  background-color: var(--header-bg-color);
  z-index: 1;
  font-size: 13px;
}

.load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  svg {
    width: 16px;
    margin-right: 15px;
  }
  &:hover svg {
    animation: load 0.9s linear infinite;
  }
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.language {
  margin-bottom: 8px;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-links a {
  text-decoration: none;
  color: var(--main-color);
  & + a {
    margin-left: 8px;
  }
}

.footer-links {
  display: flex;
}

.link-footer a {
  color: var(--body-color);
  font-size: 14px;
}

.footer {
  padding: 30px 0;
  &-last {
    border-top: 1px solid var(--border-color);
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.social-media {
  display: flex;
  align-items: center;
  svg {
    width: 100%;
  }
  a {
    border: 1px solid var(--border-color);
    border-radius: 50%;
    color: var(--body-color);
    padding: 8px;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
}

.policy a {
  text-decoration: none;
  color: var(--body-color);
}

@media (max-width: 1030px) {
  .profile-name {
    display: none;
  }
  .profile-menu-link {
    padding: 20px 10px;
    font-size: 14px;
  }

  .trends {
    padding: 40px 10px;
  }
}

@media (max-width: 1120px) {
  .footer-row {
    flex-direction: column;
    & + & {
      margin-top: 10px;
    }
    .button {
      display: none;
    }
  }
}

@media (max-width: 900px) {
  .play-all {
    color: transparent;
    white-space: nowrap;
    width: 30px;
    padding: 0;
    fill: #fff;
    height: 30px;
    position: relative;
  }
  .profile-item {
    padding: 20px 10px;
  }
  .play-all svg {
    position: absolute;
    left: 58%;
    top: 50%;
    transform: translate(-50%, -50%);
    fill: #fff;
  }
}

@media (max-width: 840px) {
  .profile-contact {
    padding: 6px;
  }
  .profile-item,
  .profile-avatar {
    flex-direction: column;
  }
  .profile-item svg {
    margin-right: 0;
  }
  .profile-item {
    text-align: center;
  }
  .profile-img {
    margin-right: 0;
    margin-top: 10px;
  }
  .profile-name {
    display: block;
    margin-bottom: 10px;
    margin-top: 6px;
  }
  .profile-menu {
    flex-direction: column;
  }
  .menu-items {
    order: 1;
  }
}

@media (max-width: 980px) {
  .videos {
    grid-template-columns: 1fr 1fr;
  }
  .profile {
    min-height: 380px;
    max-height: 380px;
  }
}

@media (max-width: 800px) {
  .trends .follow-buttons {
    display: none;
  }
}

@media (max-width: 750px) {
  .left-side {
    display: none;
  }
  .header-menu {
    display: none;
  }
  .search-bar input {
    max-width: 140px;
  }
  .user-settings button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    position: relative;
    color: transparent;
  }
  .user-settings button svg {
    margin-right: 0;
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 440px) {
  .user-settings svg {
    display: none;
  }

  .videos {
    grid-template-columns: 1fr;
  }
}

.dark-light {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--header-bg-color);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  svg {
    width: 28px;
  }
}

.dark-mode .dark-light svg {
  fill: #ffce45;
  stroke: #ffce45;
}

.dark-light svg {
  fill: transparent;
  transition: 0.5s;
}

@media (max-width: 475px) {
  .footer-links {
    flex-direction: column;
  }
  .footer-links a + a {
    margin-left: 0;
  }
  .footer-row:last-child {
    align-items: flex-end;
  }
  .footer-row {
    align-items: flex-start;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .footer-links a {
    margin-bottom: 5px;
  }
  .policy {
    display: none;
  }
  .dark-light {
    bottom: 60px;
  }
}
</style>
