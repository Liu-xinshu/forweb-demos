/*
 * @Author: 刘新书
 * 
 * @Date: 2020-05-07 09:40:58
 * @
# Description: 用户状态管理
 */

import { asyncRoutes } from "../../../router/index";
import { GET_USER_INFO, GET_MENUS } from "../../../api/user";
const user = {
  namespaced: true,
  state: {
    // 用户权限
    role: [],
    // 符合权限的路由
    asyncRoutes: [],
    // 用户菜单
    menus: [],
  },
  getters: {
    queryRole(state) {
      return state.role;
    },
    queryAsyncRoutes(state) {
      return state.asyncRoutes;
    },
    queryMenus(state) {
      return state.menus;
    },
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
    },
    setRoutes(state, routes) {
      state.asyncRoutes = routes;
    },
    setMenus(state, menus) {
      state.menus = menus;
    },
    // 退出系统
    dropout(state) {
      state.role = [];
      state.asyncRoutes = [];
      state.menus = [];
    },
  },
  actions: {
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
        if (role.some((item) => item.indexOf("admin") > -1)) {
          commit("setRoutes", asyncRoutes);
          resolve();
          return;
        }
        commit("setRoutes", filterRoutes(role, asyncRoutes));
        resolve();
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
  },
};
function filterRoutes(role, routes) {
  return routes.filter((item) => {
    if (isTrue(role, item)) {
      if (item.children && item.children.length) {
        item.children = filterRoutes(role, item.children);
      }
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

export default user;
