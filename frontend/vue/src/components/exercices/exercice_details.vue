<template>
  
  <div class="bg-modal " v-if="state" @click="closeModal">
    <div class="modal">

    </div>

  </div>

</template>


<script>
export default {
  name: "exerciceDetails",
  
  methods:{
    closeModal() {
      this.$parent.showModal();
    },
    
  },
  
  props:[
    "state"
  ]
};
</script>


<style>

.bg-modal{
  top: 0;
  left: 0;
  z-index: 9;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.411);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal{
  width: 500px;
  height: 400px;
  background-color: white;
  z-index: 10;
  border-radius: 10px;

}
</style>
