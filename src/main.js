import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api";
import "./plugins/index";
import "./styles/index.scss";
import "./components/index";


window.$api = api;
Vue.prototype.$getters = window.$getters = store.getters;
Vue.prototype.$commit = window.$commit = store.commit;
Vue.prototype.$dispatch = window.$dispatch = store.dispatch;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

