<template>
  <div>
    {{trainings}}
    peliles
    <VPagination :pages="pages" :currentPage="currentPage" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// import exercice from "./exercice";
import VPagination from "../layout/VPagination";
// import  fetch_exercice  from "../../store/exercices.module";
export default {
  name: "TrainingsList",
  components: {
    // exercice,
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
      if (this.isLoading || this.trainingsCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.trainingsCount / this.itemsPerPage)).keys(),
      ].map((e) => e + 1);
    },
    ...mapGetters(["trainingsCount", "isLoading", "trainings", "currentUser"]),
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchTrainings();
    },
    type() {
      this.resetPagination();
      this.fetchTrainings();
    },
    author() {
      this.resetPagination();
      this.fetchTrainings();
    },
  },
  methods: {
    fetchTrainings() {
      // console.log(this.listConfig);
      this.$store.dispatch("fetch_trainings", this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.fetchTrainings();
  },
};
</script>

<style>
/* .videos {
  margin: 30px auto auto auto;
  max-width: 1200px;
} */
</style>
