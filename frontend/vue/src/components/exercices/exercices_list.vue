<template>
  <div class="videos">
    <span v-for="(exercice, index) in exercices" v-bind:key="index"> mango</span>
      {{exercices}}
    <exercice v-for="(exercice, index) in exercices" v-bind:key="index" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import exercice from "./exercice";
// import  fetch_exercice  from "../../store/exercices.module";
export default {
  name: "exercicesList",
  components: {
    exercice,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      if (this.author) {
        filters.author = this.author;
      }
      if (this.tag) {
        filters.tag = this.tag;
      }
      if (this.favorited) {
        filters.favorited = this.favorited;
      }
      return {
        type,
        filters
      };
    },
    ...mapGetters(["exercicesCount", "isLoading", "exercices","currentUser"]),
    // ...mapGetters(["currentUser"]),
  },
  methods: {
    fetchExercices() {
      this.$store.dispatch("fetch_exercices",this.listConfig);
    },

  },
  mounted() {
    // this.resetPagination();
    this.fetchExercices();
  },
  // data() {
  //   console.log(this.exercices);
  //   // return {
  //   //   exercices: [
  //   //     { name: "exer1" },
  //   //     { name: "exer2" },
  //   //     { name: "exer2" },
  //   //     { name: "exer2" },
  //   //     { name: "exer2" },
  //   //     { name: "exer2" },
  //   //   ],
  //   // };
  // },

};
</script>

<style>
.videos {
  max-width: 1200px;
}
</style>
