<template>
  <div class="container">
    <app-header />
    <router-view />
    <button class="btn btn-primary">Click Me!</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style></style>
