import request from "../../utils/request";

// 用户登录
export function LOGIN(params) {
  return request.post("/login", params);
}

// 获取用户信息
export function GET_USER_INFO(params) {
  return request.post("/getUserInfo", params);
}

// 获取菜单
export function GET_MENUS() {
  return request.get("/getMenus");
}
