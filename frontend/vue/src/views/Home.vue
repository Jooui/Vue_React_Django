<template>
    <div class="HOME">
        <span>HOME</span>
        <exercice/>
        <!-- <input :value="data" @input="change">
        <button type="button" @click="change">Click Me!</button>
        <span>DATA: {{data}}</span>
        <span>ARTICLES COUNT {{articlesCount}}</span> -->
    </div>
</template>
<script>
import exercice from "@/components/exercices/exercice";
export default {
  name: "Home",
  components: {
    exercice
  },
};
   
</script>
<style scoped>

</style>