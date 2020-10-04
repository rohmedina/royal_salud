<template>
<div>
  <div>
    <b-navbar variant="faded" type="primary">
      <b-nav-item :to="{ name: 'Home' }">
        <b-icon-chevron-left></b-icon-chevron-left>
      </b-nav-item>
      <b-navbar-brand tag="h1" class="mb-0 ml-3">Agregar Tutorial</b-navbar-brand>
    </b-navbar>
  </div>

  <b-container class="mt-2">
    <b-row cols="1">
      <b-form @submit="onSubmit">
        <b-col class="mt-1">
          <b-form-group label="Titulo" label-for="input-1">
            <b-form-input v-model="form.nombre" id="nombre"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Profesor" label-for="input-2">
            <b-form-input v-model="form.profesor" id="profesor"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Desarrollo" label-for="input-3">
            <b-form-input v-model="form.materia" id="materia"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="mt-1">
          <b-form-group label="Fecha" label-for="input-4">
            <b-form-datepicker id="datepicker-dateformat2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es" v-model="form.fecha"></b-form-datepicker>
          </b-form-group>
        </b-col>

        <b-button class="botonAgregar" type="submit">agregar</b-button>
      </b-form>
    </b-row>
  </b-container>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nombre: "",
        profesor: "",
        materia: "",
        fecha: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let agregar = {
        nombre: this.form.nombre,
        profesor: this.form.profesor,
        materia: this.form.materia,
        fecha: this.form.fecha,
      };

      axios.post("https://rayentutorialtestapp.azurewebsites.net/createtutorial", agregar).then((res) => {
        if (res.data.id !== undefined) {
          alert("El tutorial se agrego correctamente");
          this.$router.push({
            name: "Home",
          });
        } else {
          alert("Error, ingresa nuevamente los datos, debes completar todos los campos");
        }
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

li {
  list-style: none;
}

a {
  color: white;
}

a:hover {
  color: white;
}

.bAgregar {}

.botonAgregar {
  color: white;
  background: #6315ee;
  text-transform: uppercase;
}

.botonAgregar:hover {
  color: #6315ee;
  background: white;
  border: 1px solid #6315ee;
}
</style>
