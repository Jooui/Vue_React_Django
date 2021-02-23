<template>
  <div class="page-exercice-upload">
    <form novalidate @submit.prevent="onSubmit(exercice.name,exercice.description,exercice.image,value)" class="upload-exercice-form">
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
        v-model="exercice.name"
        placeholder="Exercice name.."
        class="form-input"
        required
      />

      <label class="title-label" for="desc-field">Description:</label>
      <textarea
        id="desc-field"
        v-model="exercice.description"
        placeholder="Description.."
        required
        class="form-input form-input--textarea"
      ></textarea>

      <label class="title-label" for="img-field">Image URL:</label>
      <input
        id="img-field"
        type="text"
        v-model="exercice.image"
        placeholder="Exercice name.."
        class="form-input"
        required
      />
      <!-- <UseDropzoneDemo options=""/> -->
      <label class="title-label">Categories:</label>
      <div class="form-categories">
        <Multiselect
          v-model="value"
          mode="tags"
          placeholder="Select the categories"
          :options="options"
        ></Multiselect>
      </div>

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
import Multiselect from "@vueform/multiselect";
import CategoriesService from "@/services/categories.service.js";
// import UseDropzoneDemo from "@/components/Dropzone";
import store from "@/store";

export default {
  name: "ExerciceUpload",
  components: {
    Multiselect,
    // UseDropzoneDemo
  },

  data: function() {
    return {
      value: [],
      options: [],
      client_errors: [],
    };
  },
  computed: {
    ...mapGetters(['exercice'])
  },
  methods: {
    async getCategories() {
      this.options = await CategoriesService.query()
        .then(({ data }) => {
          let arr = data.results.map((obj) => {
            return { value: obj.id, label: obj.name };
          });
          return arr;
        })
        .catch(() => {
          return [{ value: 0, label: "An error has occurred", disabled: true }];
        });
    },
    onSubmit(name, desc, img, value) {
      this.client_errors = [];

      if (!name) {
        
        this.client_errors.push('El nombre es obligatorio.');
      }
      if (!desc) {
        this.client_errors.push('La descripción es obligatoria.');
      }
      
      if(this.client_errors.length == 0){
        let categories = value.map((obj)=> { return obj+"" })
        Object.assign(this.exercice.categories_id, categories);
        store
        .dispatch("exercice_publish")
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
  beforeMount() {
    console.log("object");
    this.getCategories();
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
