let Mock = require("mockjs");
let dictionaries = {
  ADMIN: ["admin"],
  PUBLIC: ["public"],
};
let TOKEN = sessionStorage.token;
// 用户登录
Mock.mock("/login", function({ body }) {
  let { userName, password } = JSON.parse(body);
  if (userName === "admin" && password === "admin") {
    TOKEN = "ADMIN";
    return {
      code: 200,
      msg: "登陆成功",
      token: TOKEN,
    };
  } else {
    TOKEN = "PUBLIC";
    return {
      code: 200,
      msg: "登陆成功",
      token: TOKEN,
    };
  }
});

// 用户信息

Mock.mock("/getUserInfo", function({ body }) {
  let { token } = JSON.parse(body);
  if (token) {
    return {
      code: 200,
      msg: "获取用户身份成功",
      role: dictionaries[token],
    };
  } else {
    return {
      code: 0,
      msg: "缺少参数",
    };
  }
});

// 菜单
let AdminMenus = [
  // 一级菜单
  {
    name: "系统首页",
    path: "/home",
    icon: "el-icon-s-home",
  },
  {
    name: "示例程序",
    icon: "el-icon-view",
    // 二级子菜单
    children: [
      {
        name: "快速入门",
        icon: "el-icon-bicycle",
        children: [
          {
            name: "创建三维环境",
            fileName: "create3d",
            path: "/create3d",
            icon: "",
          },
          {
            name: "无球三维环境",
            fileName: "wuqiu",
            path: "/wuqiu",
            icon: "",
          },
          {
            name: "天空盒设置",
            fileName: "tiankong",
            path: "/tiankong",
            icon: "",
          },
          {
            name: "背景色设置",
            fileName: "beijing",
            path: "/beijing",
            icon: "",
          },
        ],
      },
      {
        name: "漫游交互",
        icon: "el-icon-truck",
        children: [
          {
            name: "鸟瞰中国",
            fileName: "niaokan",
            path: "/niaokan",
            icon: "",
          },
          {
            name: "三维窗口截屏",
            fileName: "jieping",
            path: "/jieping",
            icon: "",
          },
          {
            name: "相机回撤恢复",
            fileName: "huifu",
            path: "/huifu",
            icon: "",
          },
          {
            name: "相机聚焦模式",
            fileName: "jvjiao",
            path: "/jvjiao",
            icon: "",
          },
          {
            name: "选框放大",
            fileName: "fangda",
            path: "/fangda",
            icon: "",
          },
          {
            name: "相机环绕飞行",
            fileName: "feixing",
            path: "/feixing",
            icon: "",
          },
          {
            name: "相机飞入或跳入",
            fileName: "feiru",
            path: "/feiru",
            icon: "",
          },
          {
            name: "相机左右转动",
            fileName: "zhuandong",
            path: "/zhuandong",
            icon: "",
          },
          {
            name: "相机四方向观察",
            fileName: "guancha",
            path: "/guancha",
            icon: "",
          },
          {
            name: "非球面模式相机控制",
            fileName: "xiangjikongzhi",
            path: "/xiangjikongzhi",
            icon: "",
          },
          {
            name: "第一人称视角",
            fileName: "diyirencheng",
            path: "/diyirencheng",
            icon: "",
          },
          {
            name: "相机高度监控",
            fileName: "gaodujiankong",
            path: "/gaodujiankong",
            icon: "",
          },
          {
            name: "屏幕线定位",
            fileName: "dingwei",
            path: "/dingwei",
            icon: "",
          },
        ],
      },
      {
        name: "微应用",
        icon: "el-icon-truck",
        children: [
          {
            name: "测量工具",
            fileName: "wei_1",
            path: "/wei_1",
            icon: "",
          },
          {
            name: "模型剖切",
            fileName: "wei_2",
            path: "/wei_2",
            icon: "",
          },
          {
            name: "非球面剖切",
            fileName: "wei_3",
            path: "/wei_3",
            icon: "",
          },
          {
            name: "GLTF剖切",
            fileName: "wei_4",
            path: "/wei_4",
            icon: "",
          },
          {
            name: "多模型剖切",
            fileName: "wei_5",
            path: "/wei_5",
            icon: "",
          },
          {
            name: "地形挖洞",
            fileName: "wei_6",
            path: "/wei_6",
            icon: "",
          },
          {
            name: "地形多洞开挖",
            fileName: "wei_7",
            path: "/wei_7",
            icon: "",
          },
          {
            name: "PModel|多洞开挖",
            fileName: "wei_8",
            path: "/wei_8",
            icon: "",
          },
          {
            name: "地质模拟",
            fileName: "wei_9",
            path: "/wei_9",
            icon: "",
          },
          {
            name: "影像与地形卷帘",
            fileName: "wei_10",
            path: "/wei_10",
            icon: "",
          },
          {
            name: "倾斜摄影卷帘",
            fileName: "wei_11",
            path: "/wei_11",
            icon: "",
          },
          {
            name: "路径动画",
            fileName: "wei_12",
            path: "/wei_12",
            icon: "",
          },
          {
            name: "铁路路径动画",
            fileName: "wei_13",
            path: "/wei_13",
            icon: "",
          },
          {
            name: "部件选取",
            fileName: "wei_14",
            path: "/wei_14",
            icon: "",
          },
          {
            name: "部件边框选取",
            fileName: "wei_15",
            path: "/wei_15",
            icon: "",
          },
          {
            name: "模型选取",
            fileName: "wei_16",
            path: "/wei_16",
            icon: "",
          },
          {
            name: "模型编辑(PModel)",
            fileName: "wei_17",
            path: "/wei_17",
            icon: "",
          },
          {
            name: "模型编辑(Model)",
            fileName: "wei_18",
            path: "/wei_18",
            icon: "",
          },
          {
            name: "进度追踪",
            fileName: "wei_19",
            path: "/wei_19",
            icon: "",
          },
          {
            name: "模型动画",
            fileName: "wei_20",
            path: "/wei_20",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    name: "vue示例程序",
    icon: "el-icon-view",
    children: [
      {
        name: "案例1",
        vueName: "demo",
        path: "/demo",
        icon: "",
      },
    ],
  },
  {
    name: "代码高亮",
    path: "/highlight",
    icon: "el-icon-s-opportunity",
  },
  {
    name: "React",
    path: "/React",
    fileName: "React",
    icon: "el-icon-s-opportunity",
  },
  {
    name: "scrollText",
    icon: "",
    path: "/scrollText",
  },
];
let PublicMenus = [
  // 一级菜单
  {
    name: "系统首页",
    path: "/home",
    icon: "el-icon-s-home",
  },
  {
    name: "代码高亮",
    path: "/highlight",
    icon: "el-icon-s-opportunity",
  },
  {
    name: "scrollText",
    icon: "",
    path: "/scrollText",
  },
];
Mock.mock("/getMenus", function() {
  if (TOKEN === "ADMIN") {
    return {
      code: 200,
      msg: "请求成功",
      menus: AdminMenus,
    };
  } else {
    return {
      code: 200,
      msg: "请求成功",
      menus: PublicMenus,
    };
  }
});
