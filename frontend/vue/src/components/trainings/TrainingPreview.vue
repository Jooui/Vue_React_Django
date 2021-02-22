<template>
  <div>Training Preview</div>
</template>

<script>
import { mapGetters } from "vuex";
// import flexiones from "@/assets/img/exercices/flexiones.jpg";
// import exerciceDetails from "@/components/exercices/exercice_details";
import { DEFAULT_IMAGE_EXERCICE } from "@/store/defaults.type";

export default {
  name: "TrainingPreview",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
    bgImage() {
      return flexiones;
    },
  },
  props: {
    training: {
      type: Object,
      required: false,
    },
  },
  components: {
    // exerciceDetails,
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
      e.target.src = DEFAULT_IMAGE_EXERCICE;
    },
  },
};
</script>

<style>
</style>
