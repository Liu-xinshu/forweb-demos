/*
 * @Author: 刘新书
 * 
 * @Date: 2020-05-07 09:40:58
 * @
# Description: 用户状态管理
 */


import {asyncRoutes} from "../../../router/index";
const user = {
  namespaced: true,
  state: {
    // 用户权限
    role:[],
    // 符合权限的路由
    asyncRoutes:[]
  },
  getters: {
    queryRole(state) {
      return state.role;
    },
    queryAsyncRoutes(state) {
      return state.asyncRoutes;
    }
  },
  mutations: {
    setRole(state,role) {
      state.role = role;
    },
    setRoutes(state,routes) {
      state.asyncRoutes = routes;
    }
  },
  actions: {
   getUserInfo({commit}) {
    commit("setRole",["admin"]);
    return new Promise((resolve)=>{
      resolve(["admin"])
    })
   },
   getRoutes({commit},role) {
    return new Promise((resolve,reject)=>{
      if(role.some(item=>item.indexOf("admin")))return asyncRoutes;
      commit("setRoutes",filterRoutes(role,asyncRoutes));
      resolve();
    })
   }
  },
};
function filterRoutes(role,routes){
 return routes.filter(item=>{
    if(isTrue(role,item)){
      if(item.children&&item.children.length){
        item.children = filterRoutes(role,item.children)
      }
      return item
    }
    return false;
   
 })
}
function isTrue(role,router) {
  if(router.meta&&router.meta.role){
    return role.some(item=>router.meta.role.find(routerRole=>routerRole===item));
  }else {
    return true;
  }
} 

export default user;
