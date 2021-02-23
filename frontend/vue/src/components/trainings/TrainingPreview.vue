<template>
  <div class="training-preview-container" @click="$router.push('/trainings/'+training.slug)">
    <div class="training-preview-left">
      <img :src="training.image != '' ? training.image : training.difficulties[0].exercice.image" alt="">
    </div>
    <div class="training-preview-right">
      <h1>Entrenamiento en casa 7 minutos</h1>
      <div class="training-preview-info">
        <div class="training-categories">
          <span>Piernas</span>
          <span>Pecho</span>
          <span>Abdomen</span>
        </div>
        <div class="training-author">
          <i class="fas fa-user-alt"></i>
          <div>Revand</div>
        </div>
        <div class="training-mg"><i class="far fa-heart"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import flexiones from "@/assets/img/exercices/flexiones.jpg";
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
    console.log(this.training);
    console.log(this.training.image != "" ? this.training.image : this.training.difficulties[0])
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

<style scoped>
  .training-preview-container{
    display: flex;
    box-sizing: border-box;
    margin-bottom: 15px;
    height: 205px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 0.5px 4px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .training-preview-left{
    width: 40%;
    background-color: lightblue;
    box-shadow: 1px 0px 2px 0.5px rgba(0, 0, 0, 0.178);
    z-index: 2;
  }

  .training-preview-left img {
    width: 100%;
  }

  .training-preview-right{
    width: 60%;
    padding: 20px 20px 20px 30px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .training-preview-right h1{
    /* font-family: Haettenschweiler, sans-serif; */
    color: rgb(43, 43, 43);
    font-weight: 800;
    /* text-shadow: 1px 1px 2px rgba(160, 160, 160, 0.527); */
  }

  .training-preview-info{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .training-categories{
    margin-right: 10px;
    background-color: rgb(240, 211, 211);
    padding: 5px 10px;
    border-radius: 100px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    color: rgb(31, 31, 31);
  }

  .training-categories span{
    margin-right: 5px;
  }

  .training-author{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(239, 248, 228);
    padding: 5px 10px;
    border-radius: 100px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    color: rgb(31, 31, 31);
  }

  .training-author i{
    margin-right: 6px;
  }

  .training-mg{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }

  .training-mg i {
    font-size: 24px;
    color: lightgray;
  }

  .training-mg i:hover {
    color: rgb(214, 65, 65);
  }

  .training-mg.toggled i {
    color: rgb(214, 65, 65);
  }

</style>
