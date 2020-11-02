<template>
  <div class="Index-page">
    <Layout :menus="menus" />
  </div>
</template>
<script>
import Layout from "../../components/Layout";
export default {
  name: "Index",
  components: {
    Layout,
  },
  data() {
    return {
      menus: [],
    };
  },
  created() {
    $dispatch("user/getMenus")
      .then(() => {
        this.menus = $getters["user/queryMenus"];
      })
      .catch((err) => {
        this.$message.error(err);
      });
  },
};
</script>
<style scoped lang="scss">
.Index-page {
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
}
</style>
