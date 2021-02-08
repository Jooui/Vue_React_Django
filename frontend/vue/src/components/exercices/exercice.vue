<template>
  <div>
  <!-- <transition
      class="animate__faster"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <exerciceDetails :state="isModalVisible" :exercice="exercice" />
    </transition>-->
    <exerciceDetails :state="isModalVisible" :exercice="exercice" /> 

    <div class="video" @click="showModal">
      <!-- <div class="video-time">15.13</div> -->

      <img
        :src="exercice.image"
        class="exercice_img"
        alt="exer imagen"
        @error="imageDefault"
      />

      <!-- </div> -->
      <div class="exercice_text">
        <img
          class="verified"
          v-if="exercice.verified"
          src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
          alt="verified"
        />
        <div class="video-content">{{ exercice.name }}</div>
        <div class="view">{{ exercice.slug }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import flexiones from "@/assets/img/exercices/flexiones.jpg";
import exerciceDetails from "@/components/exercices/exercice_details";
import { IMAGEN_EXERCICE } from "@/store/defaults.type";

export default {
  name: "exercice",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
    bgImage() {
      return flexiones;
    },
  },
  props: {
    exercice: {
      type: Object,
      required: false,
    },
  },
  // watch: {
  //   exercice: {
  //     handler(exercice) {},
  //     deep: true,
  //   },
  // },
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
    imageDefault(e) {
      e.target.src = IMAGEN_EXERCICE;
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
  height: 70%;
  z-index: 1;
}

.video {
  height: 100%;
  max-width: 320px;
  max-height: 290px;
  overflow: hidden;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
  background-color: var(--header-bg-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover img.exercice_img {
    transform: scale(1.5);
    transform-origin: center;
  }
  &:hover .view {
    padding: 10px;
  }
}

.verified {
  width: 20px;
  height: auto !important;
  position: absolute;
  color: #fff;
  bottom: 10px;
  right: 10px;
  transition: 0.3s ease-in;
}

.exercice_text {
  width: 100%;
  max-width: 400px;
  color: var(--main-color);
  padding: 5px 10px 0;
  border-radius: 0 0 4px 4px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  position: relative;
  // z-index: 0;
}
.view {
  position: unset !important;
  background-color: transparent !important;
}
</style>
