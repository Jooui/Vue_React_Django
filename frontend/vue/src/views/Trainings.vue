<template>
  <div class="page-trainings">
    <TrainingsFilters/>
    <TrainingsList type="all"/>
  </div>
</template>
<script>
import TrainingsList from "@/components/trainings/TrainingsList";
import TrainingsFilters from "@/components/trainings/TrainingsFilters";

export default {
  name: "Trainings",
  components: {
    TrainingsFilters,
    TrainingsList,
  },
};
</script>
<style scoped>
  .page-trainings {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 50px ;
    /* position: relative; */
  }
</style>
