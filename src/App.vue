<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    storage.setItem("abc", { a: 1 }, "user");
  },
};
</script>

<style>
</style>
