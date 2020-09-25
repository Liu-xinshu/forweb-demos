/**
 * 集体抛出
 */
let files = require.context('./',true,/^\.\/\w+\/index\.js$/);
export default files.keys().reduce((prev,cur)=>{
    let arr = cur.match(/\.\/(\w+)\/index\.js/);
    prev[arr[1]] = files(cur).default;
    return prev;
},{});