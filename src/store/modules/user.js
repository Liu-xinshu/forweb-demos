/*
 * @Author: 刘新书
 * 
 * @Date: 2020-05-07 09:40:58
 * @
# Description: 用户状态管理
 */

import { GET_USER_INFO, GET_MENUS, GET_ROUTER } from "../../api/user";

const state = {
  // 用户权限
  role: [],
  // 符合权限的路由
  asyncRoutes: [],
  // 用户菜单
  menus: [],
};

const getters = {
  queryRole(state) {
    return state.role;
  },
  queryAsyncRoutes(state) {
    return state.asyncRoutes;
  },
  queryMenus(state) {
    return state.menus;
  },
};

const mutations = {
  setRole(state, role) {
    state.role = role;
  },
  setRoutes(state, routes) {
    routes.push({
      path: "*",
      component: () => import("@/views/404.vue"),
    });
    state.asyncRoutes = routes;
  },
  setMenus(state, menus) {
    state.menus = menus;
  },
};

const actions = {
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      GET_USER_INFO({ token: sessionStorage.token }).then((res) => {
        if (res.code === 200) {
          commit("setRole", res.role);
          resolve(res.role);
        } else {
          reject(res.msg);
        }
      });
    });
  },
  getRoutes({ commit }, role) {
    return new Promise((resolve, reject) => {
      GET_ROUTER({ token: sessionStorage.token }).then((res) => {
        if (res.code === 200) {
          commit("setRoutes", filterRoutes(role, res.routes));
          resolve();
        } else {
          reject(res.msg);
        }
      });
    });
  },
  getMenus({ commit }) {
    return new Promise((resolve, reject) => {
      GET_MENUS().then((res) => {
        if (res.code === 200) {
          commit("setMenus", res.menus);
          resolve();
        } else {
          reject(res.msg);
        }
      });
    });
  },
};

function filterRoutes(role, routes) {
  return routes.filter((item) => {
    if (isTrue(role, item)) {
      if (item.children && item.children.length) {
        item.children = filterRoutes(role, item.children);
      }
      item.component = loadView(item.component);
      return true;
    }
    return false;
  });
}
function isTrue(role, router) {
  if (router.meta && router.meta.role) {
    return role.some((item) =>
      router.meta.role.find((routerRole) => routerRole === item)
    );
  } else {
    return true;
  }
}

function loadView(view) {
  // 路由懒加载
  return function(resolve) {
    return require([`@/${view}`], resolve);
  };
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
