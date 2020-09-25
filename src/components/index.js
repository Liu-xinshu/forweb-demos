import Vue from "vue";

// 引入全部组件全局挂载
const files = require.context("./commons", true, /.vue$/);
files.keys().forEach((path) => {
  let component = files(path).default;
  Vue.component(component.name, component);
});
