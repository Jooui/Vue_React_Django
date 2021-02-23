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
      <img :src="training.image" alt="">
      
    </div>
    <div class="page-trainings-details-bottom">
      <exercice
        v-for="(t, index) in training.difficulties"
        v-bind:key="index"
        :exercice="t.exercice"
        class="exercices-trainings"
      />
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapGetters } from "vuex";
import exercice from "../components/exercices/exercice";


export default {
  name: "TrainingsDetails",
  data: function() {
    return {
      author: false,
    };
  },
  components: {
    exercice,
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
};
</script>
<style scoped>
  .page-trainings-details {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    justify-content: space-between;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  .page-trainings-details-up{
    width: 50%;
    height: 300px;
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    box-shadow: 0px 0px 7px 0px rgba(156,156,156,1);
  }
  .page-trainings-details-up img{
    width: 100%;
    object-fit:fill;
    opacity: 0.5;
  }
  .page-trainings-details-up-text{
    font-size: 60px;
    position: absolute;
    margin-left: 20px;
    margin-top:20px;
    color: white;
    text-shadow: 3px 0px 2px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);
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
    width: 50%;
    height: 500px;
    overflow: hidden;
    position: relative;
    border-radius: 30px;
    box-shadow: 0px 0px 7px 0px rgba(156,156,156,1);
    display: flex;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.884);
  }
  .exercices-trainings{
    padding: 20px;
    width: 25%;
    height: 50%;
  }
</style>
