const files = require.context("./", false, /\.\/[^index]\w+\.js$/);

export default files.keys().reduce((a, b) => {
  let arr = b.match(/\.\/(\w+)\.js/);
  let key = arr[1];
  a[key] = files(b).default;
  return a;
}, {});
