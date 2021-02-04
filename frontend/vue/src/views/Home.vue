<template>
  <div class="page-home">
    <exercices-list type="all"/>
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
<style scoped>
.page-home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>
