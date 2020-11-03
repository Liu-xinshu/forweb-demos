import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];


const router = new VueRouter({
  mode: "hash",
  routes: constantRoutes,
});

/**
 * 解决报错 Error: Redirected when going from "/login" to "/home" via a navigation guard.
 *
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
