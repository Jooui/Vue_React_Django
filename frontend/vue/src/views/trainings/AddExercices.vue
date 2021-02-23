<template>
  <div class="bg-modal" v-if="state" @click.self="closeModal">
    <div class="modal add-exercices-container">
      <div class="horizontal-inputs">
        <div class="input-container">
          <label class="title-label" for="name-field">Sets:</label>
          <input id="name-field" type="number" class="form-input" required v-model="difficulty.sets" />
        </div>

        <div class="input-container">
          <label class="title-label" for="name-field">Repetitions:</label>
          <input id="name-field" type="number" class="form-input" required v-model="difficulty.repetitions"/>
        </div>

        <div class="input-container">
          <label class="title-label" for="name-field">Duration:</label>
          <input id="name-field" type="number" class="form-input" required v-model="difficulty.duration"/>
        </div>
      </div>

      <label class="title-label">Exercices:</label>
      <div class="select-exercices-add">
        <Multiselect
          v-model="difficulty.ex_id"
          placeholder="Select the exercies"
          :options="options"
        >
          <!-- <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="character-label-icon" :src="value.icon" />
              {{ value.name }}
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="character-option-icon" :src="option.icon"> {{ option.name }}
          </template> -->
        </Multiselect>
      </div>
      <a @click.self="AddExercice(difficulty)" class="btn-add-exer">ADD EXER</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Multiselect from "@vueform/multiselect";
import ExercicesService from "@/services/exercices.service.js";

// import store from "@/store";
// import { DEFAULT_IMAGE_EXERCICE } from "@/store/defaults.type";
export default {
  name: "exerciceDetails",
  data: function() {
    return {
      difficulty:{
        sets:0,
        repetitions:0,
        duration:0,
        ex_id:0
      },
      value:{}
    };
  },
  components: {
    Multiselect,
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },

  methods: {
    closeModal() {
      this.$parent.showModal();
    },

    AddExercice(difficulty) {
      let dif =Object.assign({},difficulty);
      this.$parent.AddExercice(dif);
      this.$parent.showModal();
    },
    async getExercices() {
      this.options = await ExercicesService.query()
        .then(({ data }) => {
          console.log(data);
          let arr = data.results.map((obj) => {
            return {
              value: obj.id,
              label: obj.name + " - " + obj.author.username,
              icon: obj.image
            };
          });
          return arr;
        })
        .catch(() => {
          return [{ value: 0, label: "An error has occurred", disabled: true }];
        });
    },
  },
  beforeMount() {
    console.log("object");
    this.getExercices();
  },
  props: ["state"],
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.add-exercices-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}

.add-exercices-container * {
  width: 70%;
}

.select-exercices-add {
  max-width: 400px;
}

.btn-add-exer {
  max-width: 150px;
  height: 40px;
  border-radius: 100px;
}

.form-input {
  height: 40px;
  width: 80px;
}

.horizontal-inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-container{
  display: flex;
  flex-direction: column;
}
</style>