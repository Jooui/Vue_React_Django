<template>
  <div class="page-exercice-upload">
    <form novalidate @submit.prevent="onSubmit()" class="upload-exercice-form">
      <label class="title-label" for="name-field">Name:</label>
      <input
        id="name-field"
        type="text"
        v-model="name_exer"
        placeholder="Exercice name.."
        class="form-input"
        required
      />

      <label class="title-label" for="desc-field">Description:</label>
      <textarea
        id="desc-field"
        v-model="desc_exer"
        placeholder="Description.."
        required
        class="form-input form-input--textarea"
      ></textarea>

      <label class="title-label" for="img-field">Image URL:</label>
      <input
        id="img-field"
        type="text"
        v-model="name_exer"
        placeholder="Exercice name.."
        class="form-input"
        required
      />

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
import Multiselect from "@vueform/multiselect";
import CategoriesService from "@/services/categories.service.js";
export default {
  name: "ExerciceUpload",
  components: {
    Multiselect,
  },

  data: function() {
    return {
      value: [],
      options: [],
    };
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
    onSubmit() {
      console.log(this.value, this.name_exer, this.desc_exer);
    },
  },

  beforeMount() {
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
