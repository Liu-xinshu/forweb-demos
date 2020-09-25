/**
 * @description 下载JSON方法 
 * @param {Array} data JSON数据 
 * @param {String} fileName 文件名
 * @return {Array} 
 */
export default(data,fileName)=> {
    if (!data) {
        alert('data is null');
        return;
    }
    if (!fileName) fileName = 'json.json'
    if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 4)
    }
    var blob = new Blob([data], { type: 'text/json' });
    var e = document.createEvent('MouseEvents');
    var a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}