<template>
<div>
  <div>
    <b-navbar variant="faded" type="primary">
      <b-nav-item :to="{ name: 'Home' }">
        <b-icon-chevron-left></b-icon-chevron-left>
      </b-nav-item>
      <b-navbar-brand tag="h1" class="mb-0 ml-3">Detalle Tutorial</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right :to="{ name: 'Modificar' }">
          <b-icon-pencil></b-icon-pencil>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>

  <b-container class="mt-2">
    <b-row cols="1">
      <b-form>
        <b-col class="mt-1">
          <b-form-group label="Titulo" label-for="input-1">
            <b-form-input v-model="nombre" id="nombre"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Profesor" label-for="input-2">
            <b-form-input v-model="profesor" id="profesor"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Desarrollo" label-for="input-3">
            <b-form-input v-model="materia" id="materia"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Fecha" label-for="input-4">
            <b-form-datepicker id="datepicker-dateformat2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" v-model="fecha"></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-form>
    </b-row>
  </b-container>
</div>
</template>

<script>
import axios from "axios";

import {
  mapState
} from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tutorial"]),
  },
};
</script>

<style>
.navbar {
  background: #6315ee;
  color: white;
}

li {
  list-style: none;
}

a {
  color: white;
}

a:hover {
  color: white;
}
</style>
