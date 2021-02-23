<template>
  <div class="page-exercice-upload">
    <AddExercices :state="isModalVisible" /> 
    <form novalidate @submit.prevent="onSubmit()" class="upload-exercice-form">
      <p v-if="client_errors.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, index) in client_errors" v-bind:key="index">{{ error }}</li>
        </ul>
      </p>
      <label class="title-label" for="name-field">Name:</label>
      <input
        id="name-field"
        type="text"
        v-model="training.name"
        placeholder="Exercice name.."
        class="form-input"
        required
      />

      <label class="title-label" for="desc-field">Description:</label>
      <textarea
        id="desc-field"
        v-model="training.description"
        placeholder="Description.."
        required
        class="form-input form-input--textarea"
      ></textarea>

      <label class="title-label" for="img-field">Image URL:</label>
      <input
        id="img-field"
        type="text"
        v-model="training.image"
        placeholder="Exercice name.."
        class="form-input"
        required
      />
      <!-- <UseDropzoneDemo options=""/> -->
      <label class="title-label">Exercices:</label>
      <a class="button" @click="showModal">
        <p>ADD EXERCICE</p>
      </a>


      <AddExercicePreview
        v-for="(diff, index) in training.difficulties"
        v-bind:key="index"
        :difficulty="diff"
      />

      <!-- <div class="form-categories">
        <Multiselect
          v-model="value"
          mode="tags"
          placeholder="Select the categories"
          :options="options"
        ></Multiselect>
      </div> -->

      <button type="submit" class="button">
        <div class="arrow-wrapper">
          <span class="arrow"></span>
        </div>
        <p>UPLOAD EXERCICE</p>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Multiselect from "@vueform/multiselect";
import AddExercices from './AddExercices.vue'
import AddExercicePreview from './AddExercicePreview.vue'

// import UseDropzoneDemo from "@/components/Dropzone";
import store from "@/store";

export default {
  name: "TrainingUpload",
  components: {
    // Multiselect,
    AddExercices,
    AddExercicePreview
    // UseDropzoneDemo
  },

  data: function() {
    return {
      value: [],
      options: [],
      client_errors: [],
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters(['training'])
  },
  methods: {
    showModal() {
      this.isModalVisible = this.isModalVisible == true ? false : true;
    },
    AddExercice(exercice) {
      // console.log(arr);
      console.log(exercice);
      // let values = Object.values(exercice);
      // Array.prototype.push.apply(this.training.difficulties, values);
      // this.training.difficulties[this.training.difficulties.length] = exercice
      this.training.difficulties.push(exercice)

      console.log(this.training);
      // console.log(JSON.stringify(this.training.difficulties));
      
    },
    onSubmit() {
      this.client_errors = [];
      console.log(JSON.stringify(this.training));
      if (!this.training.name) {
        
        this.client_errors.push('El nombre es obligatorio.');
      }
      if (!this.training.description) {
        this.client_errors.push('La descripción es obligatoria.');
      }
      
      if(this.client_errors.length == 0){
        // let categories = value.map((obj)=> { return obj+"" })
        // Object.assign(this.exercice.categories_id, categories);
        store
        .dispatch("training_publish")
        .then(() => {
          setTimeout(() => {
            // location.reload();
            this.$router.push({ name: "Home" });
          }, 1500);
        });
      }
    },
  },
  async beforeRouteLeave(to, from, next) {
    await store.dispatch("exercice_reset_sate");
    next();
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.page-exercice-upload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.upload-exercice-form {
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 50px;
}

.title-label {
  align-self: flex-start;
  margin-left: 50px;
}

.form-input {
  height: 40px;
  max-width: 400px;
  width: 100%;
}

.form-categories {
  max-width: 300px;
  width: 100%;
}
</style>
