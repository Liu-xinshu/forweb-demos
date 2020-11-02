const dictionaries = {
  beijing: "透明背景色",
  create3d: "创建三维环境",
  tiankong: "设置天空盒",
  dingwei: "屏幕线定位",
  diyirencheng: "第一人称示例",
  fangda: "框选放大",
  feiru: "相机飞入或跳入",
  feixing: "相机环绕飞行",
  gaodujiankong: "相机高度监控",
  guancha: "相机四方向观察",
  huifu: "相机回撤恢复",
  jieping: "三维窗口截屏",
  jvjiao: "相机聚焦模式",
  niaokan: "鸟瞰中国",
  xiangjikongzhi: "非球面模式相机控制",
  zhuandong: "相机左右转动",
  wuqiu: "创建非球面三维环境",
};

function findTabName(key) {
  return dictionaries[key] || null;
}
export { findTabName };
