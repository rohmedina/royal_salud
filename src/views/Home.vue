<template>
<div>
  <div>
    <b-navbar variant="faded" type="primary">
      <b-navbar-brand tag="h1" class="mb-0 ml-5">Tutoriales</b-navbar-brand>
    </b-navbar>
  </div>

  <b-container>
    <b-row cols="1" class="mt-3">
      <b-input-group>
        <b-form-input></b-form-input>
      </b-input-group>
    </b-row>

    <b-row class="selection mt-3" cols="2">
      <b-col class="selection-info">
        <p>Ordenado por</p>
      </b-col>
      <b-col>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <table class="table" :items="tutoriales">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Profesor</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody @click="verDetalle()" class="infoTutorial">
          <tr v-for="(tutorial, i) of tutoriales" :key="i.id">
            <th>{{ tutorial.nombre }}</th>
            <td>{{ tutorial.profesor }}</td>
            <td>{{ tutorial.fecha }}</td>
          </tr>
        </tbody>
      </table>
    </b-row>

    <b-row class="mt-5">
      <b-col cols="auto" class="eTodos">
        <b-button class="botonEliminar" @click="deleteTodes">eliminar todos</b-button>
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col cols="auto">
        <b-icon-plus-circle scale="3" class="iconAdd" @click="addTutorial"></b-icon-plus-circle>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";

export default {
  data() {
    return {
      selected: null,
      options: [{
          value: "Titulo",
          text: "Titulo",
        },
        {
          value: "Fecha",
          text: "Fecha",
        },
      ],
    };
  },
  computed: {
    ...mapState(["tutoriales", "tutorial"]),
  },
  mounted() {
    this.llamarTutoriales();
  },
  methods: {
    ...mapActions(["llamarTutoriales", "eliminarTodo", "detalleTutorial", "mostrarDetalle"]),

    addTutorial() {
      this.$router.push({
        name: "Agregar",
      });
    },

    deleteTodes() {
      this.eliminarTodo();
    },
    verDetalle() {
      this.mostrarDetalle();
      this.$router.push({
        name: "Detalle",
      });
    },
  },
};
</script>

<style>
.navbar {
  background: #6315ee;
  color: white;
}

.selection {
  margin: auto;
}

.selection-info {
  text-align: end;
}

.eTodos {
  margin: auto;
}

.botonEliminar {
  color: #6315ee;
  background: white;
  text-transform: uppercase;
  border: 1px solid #6315ee;
}

.iconAdd {
  color: #61bcd4;
  cursor: pointer;
}

.infoTutorial {
  cursor: pointer;
}
</style>
