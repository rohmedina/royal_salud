import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/agregar",
    name: "Agregar",
    // route level code-splitting
    // this generates a separate chunk (agregar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "agregar" */ "../views/Agregar.vue"),
  },
  {
    path: "/modificar",
    name: "Modificar",
    // route level code-splitting
    // this generates a separate chunk (modificar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "modificar" */ "../views/Modificar.vue"),
  },
  {
    path: "/detalle",
    name: "Detalle",
    // route level code-splitting
    // this generates a separate chunk (detalle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detalle" */ "../views/Detalle.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
