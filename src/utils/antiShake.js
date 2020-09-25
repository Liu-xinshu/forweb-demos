/**
 * @description: 防抖函数
 * @param {function} callback 回调函数 
 * @param {Number} delay 延时执行时间 
 */
export default (() => {
  let time;
  return (callback, delay = 0) => {
    clearTimeout(time);
    time = setTimeout(callback, delay);
  };
})();
