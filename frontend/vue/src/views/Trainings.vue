<template>
  <div class="page-trainings">
    TRAININGS
    <TrainingsList type="all"/>
    <!-- <exercices-list type="all"/> -->
  </div>
</template>
<script>
import TrainingsList from "@/components/trainings/TrainingsList";
export default {
  name: "Trainings",
  components: {
    TrainingsList,
  },
};
</script>
<style scoped>
.page-trainings {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>
