import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

export const asyncRoutes = [
  {
    path: "/",
    component: () => import("../views/Index"),
    redirect: "home",
    children: [
      {
        path: "home",
        component: () => import("../views/Index/Home"),
        meta: {
          title: "系统首页",
          role: ["public"],
        },
      },
      {
        path: "scrollText",
        component: () => import("../views/Index/scrollText.vue"),
        meta: {
          title: "滚动字幕",
          role: ["public"],
        },
      },
      {
        path: "Tree",
        component: () => import("../views/Index/Tree"),
        meta: {
          title: "Tree",
          role: ["admin"],
        },
      },
      {
        path: "Code",
        name: "Code",
        component: () => import("../views/Index/Code"),
        meta: {
          title: "Code",
          role: ["admin"],
        },
      },
      {
        path: "scrollText",
        component: () => import("../views/Index/scrollText"),
        meta: {
          title: "scrollText",
          role: ["public"],
        },
      },
      {
        path: "vuep",
        name: "vuep",
        component: () => import("../views/Index/VueP"),
        meta: {
          title: "vue示例程序",
          role: ["admin"],
        },
      },
      {
        path: "highlight",
        component: () => import("../views/Index/Highlight"),
        meta: {
          title: "代码高亮",
          role: ["public"],
        },
      },
    ],
  },
  {
    path: process.env.VUE_APP_BASE_URL,
    redirect: "/",
  },
  {
    path: "*",
    component: () => import("../views/404.vue"),
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
