<template>
<div>
  <div>
    <b-navbar variant="faded" type="primary">
      <b-nav-item :to="{ name: 'Home' }">
        <b-icon-chevron-left></b-icon-chevron-left>
      </b-nav-item>

      <b-navbar-brand tag="h1" class="mb-0 ml-3">Modificar Tutorial</b-navbar-brand>
    </b-navbar>
  </div>

  <b-container class="mt-2">
    <b-row cols="1">
      <b-col class="mt-1">
        <b-form-group label="Titulo" label-for="input-1">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="mt-1">
        <b-form-group label="Profesor" label-for="input-2">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="mt-1">
        <b-form-group label="Desarrollo" label-for="input-3">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>
      <b-col class="mt-1">
        <b-form-group label="Fecha" label-for="input-4">
          <b-form-datepicker id="datepicker-dateformat2" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" locale="es"></b-form-datepicker>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="botones">
      <b-col cols="auto" class="mr-auto">
        <b-button class="botonEliminar">eliminar</b-button>
      </b-col>
      <b-col cols="auto">
        <b-button class="botonModificar">modificar</b-button>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

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

.botonEliminar {
  color: #6315ee;
  background: white;
  text-transform: uppercase;
  border: 1px solid #6315ee;
}

.botonEliminar:hover {
  color: white;
  background: #6315ee;
}

.botonModificar {
  color: white;
  background: #6315ee;
  text-transform: uppercase;
}

.botonModificar:hover {
  color: white;
  background: #6315ee;
}
</style>
