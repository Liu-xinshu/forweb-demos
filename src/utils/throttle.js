/**
 * @description: 节流函数
 * @param {function} callback 回调函数
 * @param {Number} interval 间隔时间
 */
export default (() => {
  let time = new Date();
  return function(callback, interval = 300) {
    let now = new Date();
    if (now - time >= interval) {
      callback.apply(this);
      time = now;
    }
  };
})();
