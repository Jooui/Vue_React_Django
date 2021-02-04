<template>
  <div class="HOME">
    <span>HOME</span>
    <!-- <exercice /> -->
    <exercices-list />
    <!-- <input :value="data" @input="change">
        <button type="button" @click="change">Click Me!</button>
        <span>DATA: {{data}}</span>
        <span>ARTICLES COUNT {{articlesCount}}</span> -->
  </div>
</template>
<script>
import exercicesList from "@/components/exercices/exercices_list";
export default {
  name: "Home",
  components: {
    exercicesList,
  },
};
</script>
<style scoped></style>
