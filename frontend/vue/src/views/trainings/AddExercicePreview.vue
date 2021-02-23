<template>

    <div class="add-exercice-preview-container">
      <div class="add-preview-left">
        <!-- <img :src="difficulty.ex_id.image" alt=""> -->
        {{difficulty.ex_id}}
      </div>
      <div class="add-preview-right">
        sets: 
        {{difficulty.sets}}
      </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
// import { defineAsyncComponent } from 'vue'
// import { DEFAULT_IMAGE_EXERCICE } from "@/store/defaults.type";
// import flexiones from "@/assets/img/exercices/flexiones.jpg";

// const DefaultImage = defineAsyncComponent(() =>
  
//   import('@/store/defaults.type')
// )

export default {
  name: "AddExercicePreview",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
    // bgImage() {
    //   return flexiones;
    // },
  },
  props: {
    difficulty: {
      type: Object,
      required: false,
    },
  },
  components: {

  },
  data() {

  },
  methods: {

  },
};
</script>

<style scoped>
  .add-exercice-preview-container{
    width: 100%;
    max-width: 500px;
    height: 100px;
    box-shadow: 1px 0.5px 4px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }

  .add-preview-left{
    background-color: lightblue;
    width: 40%;
  }

  .add-preview-right{
    width: 60%;
  }
</style>