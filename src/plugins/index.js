import Vue from "vue";
import Element from "element-ui";
import echarts from "echarts";
// import "./flexible";
import "./drag";
import "./beforeEach";
import "./vuep";
Vue.use(Element);


Vue.prototype.$echarts = echarts;
Vue.prototype.$Bus = window.$Bus = new Vue();
Vue.prototype.$navTo = window.$navTo = (path) => {
  if (!path) throw new Error("path is required");
  if (path === router.currentRoute.path) return;
  router.push(path).catch((err) => {});
};
