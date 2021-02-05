<template>
  <div>
    <exerciceDetails :state="isModalVisible" />
    <div class="video" @click="showModal">
      <div class="video-time">15.13</div>

      <img :src="exercice.image" alt="exer imagen" />

      <!-- </div> -->
      <div class="video-content">{{ exercice.name }}</div>
      <div class="view">{{ exercice.slug }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import flexiones from "@/assets/img/exercices/flexiones.jpg";
import exerciceDetails from "@/components/exercices/exercice_details";
export default {
  name: "exercice",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
    bgImage() {
      console.log(flexiones);
      return flexiones;
    },
  },
  props: {
    exercice: {
      type: Object,
      required: false,
    },
  },
  watch: {
    exercice: {
      handler(exercice) {
        console.log(exercice); //Debug
      },
      deep: true,
    },
  },
  components: {
    exerciceDetails,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = this.isModalVisible == true ? false : true;
    },
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
.video img {
  transition: 0.3s;
  max-width: 100%;
  display: block;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  // min-height: 190px;
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
  &:hover img {
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
