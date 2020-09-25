<template>
  <div class="Index-page">
    <el-container>
      <el-header>
        <h2>Demo</h2>
      </el-header>
      <el-container>
        <el-aside width="200px"><Menu /></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "../../components/Menu";
export default {
  name: "Index",
  components: {
    Menu,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped lang = 'scss'>
.Index-page {
  width: 100%;
  height: 100%;
  background: white;
  z-index: $base-z-index;
  font-size: $base-size;
  color: $base-color;

  .el-header {
    background-color: #b3c0d1;
    color: $base-color;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: $base-color;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: $base-color;
    text-align: left;
    line-height: 160px;
  }
}
</style>
