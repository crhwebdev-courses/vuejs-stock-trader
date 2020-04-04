import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";
import firebase from "./resources/firebase";

Vue.use(VueRouter);

Vue.use(VueResource);

Vue.http.options.root = firebase.databaseURL;

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
