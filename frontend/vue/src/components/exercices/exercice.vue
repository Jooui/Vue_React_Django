<template>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "exercice",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style lang="scss">
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
.video video {
  transition: 0.1s;
  max-width: 100%;
  display: block;
  border-radius: 4px 4px 0 0;
}

.video {
  max-width: 320px;
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
    transform: scale(1.6);
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
  max-width: 400px;
  color: var(--main-color);
  padding: 15px 10px 0;
  border-radius: 0 0 4px 4px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
