let Mock = require("mockjs");
const routes = [
  {
    path: "/",
    component: "views/Index",
    redirect: "home",
    children: [
      {
        path: "home",
        component: "views/Index/Home",
        meta: {
          title: "系统首页",
          role: ["public", "admin"],
        },
      },
      {
        path: "scrollText",
        component: "views/Index/scrollText",
        meta: {
          title: "滚动字幕",
          role: ["public", "admin"],
        },
      },
      {
        path: "Tree",
        component: "views/Index/Tree",
        meta: {
          title: "Tree",
          role: ["admin"],
        },
      },
      {
        path: "Code",
        name: "Code",
        component: "views/Index/Code",
        meta: {
          title: "Code",
          role: ["admin"],
        },
      },
      {
        path: "scrollText",
        component: "views/Index/scrollText",
        meta: {
          title: "scrollText",
          role: ["public", "admin"],
        },
      },
      {
        path: "vuep",
        name: "vuep",
        component: "views/Index/VueP",
        meta: {
          title: "vue示例程序",
          role: ["admin"],
        },
      },
      {
        path: "highlight",
        component: "views/Index/Highlight",
        meta: {
          title: "代码高亮",
          role: ["public", "admin"],
        },
      },
    ],
  },
];
Mock.mock("/getRouter", function({ body }) {
  let { token } = JSON.parse(body);
  if (!token)
    return {
      code: 0,
      msg: "请重新登陆！",
      routes: [],
    };
  return {
    code: 200,
    msg: "请求成功！",
    routes,
  };
});
