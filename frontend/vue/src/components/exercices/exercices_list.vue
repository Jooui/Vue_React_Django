<template>
  <div class="videos">
    <exercice v-for="(exercice, index) in exercices" v-bind:key="index" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import exercice from "./exercice";
export default {
  name: "exercicesList",
  components: {
    exercice,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      exercices: [
        { name: "exer1" },
        { name: "exer2" },
        { name: "exer2" },
        { name: "exer2" },
        { name: "exer2" },
        { name: "exer2" },
      ],
    };
  },
};
</script>

<style></style>
