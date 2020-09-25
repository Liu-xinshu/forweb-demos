<template>
  <div id="app">
    <Earth v-if="false" />
    <router-view></router-view>
  </div>
</template>

<script>
import Earth from "./components/Earth.vue";
export default {
  name: "App",
  components: {
    Earth,
  },
};
</script>
<style lang="scss">
div#app {
  width: 100%;
  height: 100%;
}
</style>