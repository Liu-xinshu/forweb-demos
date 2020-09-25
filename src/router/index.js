import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use (VueRouter);

const constantRoutes = [
  {
    path:"/login",
    component:()=>import("../views/Login.vue"),

  },

];


export const asyncRoutes = [
  {
    path:'/',
    component:()=>import('../views/Index'),
    redirect:"home",
    children:[
      {
        path:"home",
        component:()=>import ("../views/Index/Home"),
        meta:{
          title:"首页",
          role:["admin"]
        }
      },
      {
        path:"scrollText",
        component:()=>import("../views/Index/scrollText.vue"),
        meta:{
          title:"滚动字幕",
          role:["admin"]
        }
      }
    ]
  },
  {
    path: process.env.VUE_APP_BASE_URL,
    redirect: '/',
  },{
    path:"*",
    component:()=>import("../views/404.vue")
  }
]
const router = new VueRouter ({
  mode: 'hash',
  routes:constantRoutes,
});

export default router;
