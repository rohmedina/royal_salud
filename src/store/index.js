import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tutoriales: "",
    tutorial: "",
  },
  mutations: {
    SET_TUTORIALES(state, tutoriales) {
      state.tutoriales = tutoriales;
    },

    DELETE_TUTORIALES(state, tutoriales) {
      state.tutoriales = tutoriales;
    },
    DETALLE_TUTORIAL(state, tutorial) {
      state.tutorial = tutorial;
    },
    MOSTRAR_TUTORIALES(state, tutorial) {
      state.tutorial = tutorial;
    },
  },
  actions: {
    llamarTutoriales({ commit }) {
      axios.get("https://rayentutorialtestapp.azurewebsites.net/tutorials").then((res) => {
        //console.log(res.data);
        commit("SET_TUTORIALES", res.data);
      });
    },

    eliminarTodo({ commit }) {
      axios.delete("https://rayentutorialtestapp.azurewebsites.net/deletetutorials").then((res) => {
        //console.log(res.data);
        commit("DELETE_TUTORIALES", res.data);
      });
    },

    mostrarDetalle({ commit }) {
      axios.get("https://rayentutorialtestapp.azurewebsites.net/deletetutorials/{id}").then((res) => {
        console.log(res.data);
        commit("MOSTRAR_TUTORIALES", res.data);
      });
    },

    detalleTutorial({ commit }, payload) {
      console.log(payload);
      commit("DETALLE_TUTORIAL", payload);
    },
  },
  modules: {},
});
