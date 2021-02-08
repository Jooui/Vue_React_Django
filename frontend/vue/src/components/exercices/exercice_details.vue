<template>
  <div class="bg-modal " v-if="state" @click.self="closeModal">
    <div class="modal exercice-details">
      <i class="far fa-times-circle close-modal" @click.self="closeModal"></i>
      <div class="modal-left-side">
        <img :src="exercice.image" alt="exercice img" @error="imageDefault" />
      </div>
      <div class="modal-right-side">
        <h1>{{ exercice.name }}</h1>

        <div class="categories-list">
          <span
            v-for="(category, index) in exercice.categories"
            v-bind:key="index"
            >{{ category.name }}</span
          >
        </div>
        <br />
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Ass nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat./p>
        </p>
        <div class="options">
          <button class="btn-add">Add to my list</button>
          <button class="btn-fav"><i class="far fa-heart"></i></button>
          <button
            class="btn-delete"
            v-if="currentUser.username == exercice.author.username"
            @click="deleteExercice"
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { IMAGEN_EXERCICE } from "@/store/defaults.type";
export default {
  name: "exerciceDetails",

  computed: {
    ...mapGetters(["currentUser"]),
  },

  methods: {
    deleteExercice() {
      if (this.currentUser.username == this.exercice.author.username) {
        store.dispatch("exercice_delete", this.exercice.slug).then(() => {
          setTimeout(() => {
            location.reload();
          }, 1500);
        });
      }
    },
    closeModal() {
      this.$parent.$parent.showModal();
    },
    imageDefault(e) {
      e.target.src = IMAGEN_EXERCICE;
    },
  },
  // watch: {
  //   exercice: {
  //     handler(exercice) {
  //       console.log(exercice); //Debug
  //     },
  //     deep: true,
  //   },
  // },
  props: ["state", "exercice"],
};
</script>

<style>
.bg-modal {
  top: 0;
  left: 0;
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.411);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 50%;
  height: 50%;
  min-width: 700px;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 34%);
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}

.close-modal:hover {
  color: rgb(22, 22, 22);
}

/* Exercice Details Style */

.exercice-details {
  display: flex;
}

.modal-left-side {
  min-width: 260px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: unset;
}

.modal-left-side img {
  height: 50%;
  object-fit: cover;
  position: absolute;
  top: -30px;
  left: -30px;
  z-index: 20;
  border-radius: 15px;
  box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 34%);
  transition: 100ms;
}

.modal-left-side img:hover {
  transform: scale(1.05);
}

.modal-right-side {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.modal-right-side h1 {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: #202020;
  font-size: 38px;
}

.modal-right-side h2 {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: #202020;
  font-size: 18px;
  margin-bottom: 10px;
}

.modal-right-side p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.options {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.btn-add {
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: solid 2.5px #66f;
  color: #66f;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  margin-right: 8px;
  cursor: pointer;
}

.btn-add:hover {
  font-weight: 500;
  border: 3px solid #66f;
}

.btn-fav {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: 2.5px solid rgb(255, 102, 102);
  color: rgb(255, 102, 102);
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  margin-right: 8px;
  cursor: pointer;
}

.btn-fav:hover {
  font-size: 20px;
  border: 3px solid rgb(255, 102, 102);
}

.btn-delete {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  border: 2.5px solid rgb(170, 25, 25);
  color: rgb(170, 25, 25);
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  margin-right: 8px;
  cursor: pointer;
}

.btn-delete:hover {
  font-size: 20px;
  border: 3px solid rgb(170, 25, 25);
}

.categories-list {
  display: flex;
}

.categories-list span {
  margin-right: 10px;
}

@media screen and (max-width: 678px) {
  .exercice-details {
    display: flex;
    flex-direction: column;
  }
  .modal {
    width: 95%;
    height: 75%;
    min-width: unset;
  }

  .modal-left-side {
    height: 40%;
    width: 100%;
    padding: 0px 20px;
  }
  .modal-left-side img {
    position: unset;
    top: unset;
    left: unset;

    height: 70%;
  }
  .modal-right-side {
    flex: 1;
    padding-top: 0;
  }

  .modal-right-side p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
}
</style>
