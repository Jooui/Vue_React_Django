<template>
  <div class="page-trainings-details">
    <div class="page-trainings-details-up">
      <div class="page-trainings-details-up-text">
          {{training.name}}
      </div>
      <div class="page-trainings-details-up-description">
          {{training.description}}
      </div>
      <div class="page-trainings-details-up-author">
          <i class="far fa-user"></i>   {{training.author.username}}
      </div>
      <div class="page-trainings-details-up-actions">
          <i class="far fa-heart like"></i>
      </div>
      <img :src="training.image" alt="" @error="imageDefaultTraining">
      
    </div>
    <div class="page-trainings-details-bottom">
      <div class="exercice-training-preview" v-for="(exercice, index) in training.difficulties" v-bind:key="index">
        <exerciceDetails :state="isModalVisible" :exercice="exercice.exercice" /> 
        <div class="exercice-training-preview-left" @click="showModal">
          <img :src='exercice.exercice.image' alt="" @error="imageDefault">
        </div>
        <div class="exercice-training-preview-right" @click="showModal">
          <span class="exercice-training-preview-right--title">{{exercice.exercice.name}}</span>
          <div class="exercice-training-preview-right-trainig-info">
            <span>N Repeticiones: <span>{{exercice.repetitions}}</span></span>
            <span>Duración: <span>{{exercice.duration}}</span></span>
            <span>Sets: <span>{{exercice.sets}}</span></span>
          </div>
          <div class="exercice-training-preview-right-bottom">
            {{exercice.exercice.author.username}}
          </div>
          <div class="exercice-training-preview-right-verified">
              <img
                class="verified"
                v-if="exercice.exercice.verified"
                src="https://cdn.worldvectorlogo.com/logos/twitter-verified-badge.svg"
                alt="verified"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";
// import exercice from "../components/exercices/exercice";
import { DEFAULT_IMAGE_EXERCICE } from "@/store/defaults.type";
import { DEFAULT_IMAGE_TRAINING } from "@/store/defaults.type";
import exerciceDetails from "@/components/exercices/exercice_details";



export default {
  name: "TrainingsDetails",
  data: function() {
    return {
      author: false,
      isModalVisible: false,
    };
  },
  components: {
    exerciceDetails,
  },
  computed: {
    ...mapGetters([
      "currentUser",
      "isAuthenticated",
      "errors",
      "training",
    ]),
  },
  beforeRouteEnter(to, _, next) {
    if (to.params.training) {
      store.dispatch("fetch_training", to.params.training).then(() => {
        next();
      });
    }
  },
  async beforeRouteLeave(to, from, next) {
    await store.dispatch("training_reset_sate");
    next();
  },
  methods: {
    showModal() {
      console.log("showModal");
      this.isModalVisible = this.isModalVisible == true ? false : true;
    },
    imageDefault(e) {
      e.target.src = DEFAULT_IMAGE_EXERCICE;
    },
    imageDefaultTraining(e) {
      e.target.src = DEFAULT_IMAGE_TRAINING;
    },
  },
};
</script>
<style scoped>
  .page-trainings-details {
    width: 100%;
    height: 100%;
    padding: 50px 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    justify-content: space-between;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  .page-trainings-details-up{
    width: 100%;
    max-width: 1000px;
    height: 280px;
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    box-shadow: 0px 0px 7px 0px rgba(156,156,156,1);
  }
  .page-trainings-details-up img{
    width: 100%;
    object-fit:cover;
    opacity: 0.92;
  }
  .page-trainings-details-up-text{
    font-size: 55px;
    position: absolute;
    margin-left: 20px;
    margin-top:20px;
    color: white;
    /* text-shadow: 3px 0px 2px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8); */
    text-shadow: 2px 3px 6px black;
    text-transform: capitalize;
    z-index: 1;
  }
  .page-trainings-details-up-author{
    bottom: 10px;
    right: 30px;
    position: absolute;
    color: white;
    z-index: 1;
    text-shadow: 3px 0px 7px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
  }
  .page-trainings-details-up-author i{
    margin-right: 5px;
  }
  .page-trainings-details-up-description{
    position: absolute;
    text-shadow: 3px 0px 2px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);
    color: white;
    top: 120px;
    left: 50px;
    z-index: 1;
  }
  .page-trainings-details-up-actions{
    position: absolute;
    right: 30px;
    top: 20px;
    font-size: 30px;
    z-index: 1;
    color: white;
    text-shadow: 3px 0px 7px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);
  }
  .page-trainings-details-up-actions .like:hover{
    color: rgb(255, 0, 0);
  }
  .page-trainings-details-up-actions .like{
    transition: 0.5s;
    cursor: pointer;
  }
  .page-trainings-details-bottom{
    margin-top: 20px;
    width: 100%;
    max-width: 980px;
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    box-shadow: 0px 0px 7px 0px rgba(156,156,156,1);
    display: flex;
    flex-direction: column; 
    background-color: rgba(255, 255, 255, 0.884);
    align-items: center;
    box-sizing: border-box;
  }
  .exercice-training-preview{
    width: 95%;
    height: 150px;
    margin:15px;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    cursor: pointer;
  }
  .exercice-training-preview-left{
    width: 30%;
    height: 100%;
  }
  .exercice-training-preview-left img{
    object-fit: cover;
    height: 100%;
  }
  .exercice-training-preview-right{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 69%;
    padding: 20px;
  }
  .exercice-training-preview-right--title{
    font-size: 20px;
    color: rgb(59, 59, 59);
  }
  .exercice-training-preview-right-trainig-info{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .exercice-training-preview-right-bottom{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .exercice-training-preview-right-verified{
    position: absolute;
    top: 40px;
    right:0px;
    width: 100px;
  }

    
  @media screen and (max-width:678px){
    .page-trainings-details{
      padding: 20px;
    }
    
    .page-trainings-details-up{

    }

    .page-trainings-details-bottom{

    }
  }
</style>
