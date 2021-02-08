<template>
  <div class="videos">
    <!-- <div v-if="isLoading">Loading articles...</div>
    <div v-else>
      <div v-if="exercices.length === 0">
        No exercices....
      </div> -->
    <exercice
      v-for="(exercice, index) in exercices"
      v-bind:key="index"
      :exercice="exercice"
    />
    <!-- </div> -->

    <VPagination :pages="pages" :currentPage="currentPage" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import exercice from "./exercice";
import VPagination from "../layout/VPagination";
// import  fetch_exercice  from "../../store/exercices.module";
export default {
  name: "exercicesList",
  components: {
    exercice,
    VPagination,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all",
    },
    author: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: false,
    },
    favorited: {
      type: String,
      required: false,
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage,
      };
      if (this.author) {
        filters.author = this.author;
      }
      return {
        type,
        filters,
      };
    },

    pages() {
      if (this.isLoading || this.exercicesCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.exercicesCount / this.itemsPerPage)).keys(),
      ].map((e) => e + 1);
    },
    ...mapGetters(["exercicesCount", "isLoading", "exercices", "currentUser"]),
  },
  watch: {
    // exercices: {
    //   handler(exercices) {
    //     console.log(exercices); //Debug
    //   },
    //   deep: true,
    // },
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchExercices();
    },
    type() {
      this.resetPagination();
      this.fetchExercices();
    },
    author() {
      this.resetPagination();
      this.fetchExercices();
    },
  },
  methods: {
    fetchExercices() {
      // console.log(this.listConfig);
      this.$store.dispatch("fetch_exercices", this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.fetchExercices();
  },
};
</script>

<style>
.videos {
  margin-top: 10px;
  max-width: 1200px;
}
</style>
