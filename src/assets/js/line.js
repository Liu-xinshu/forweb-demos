/***************************************************************
                   
                    创建者:那哲尘
                    创建时间:2020-8-10
                    更新者:那哲尘
                    更新时间:2020-8-19
                    方法作用:创建模拟公路上车流效果

 **************************************************************/
function Flow_lines(viewer, ModelManager, color) {
    //
    this._viewer = viewer
    //飞渡参数化建模管理器
    this._mm = ModelManager;
    //线的颜色
    this._color = color || Freedo.Color.YELLOW.withAlpha(0.2);
    //用于存储创建好的线的数组
    this.lines = undefined;
    //存放处理好的路线的数组
    this.routes = [];
    //流动线的id
    this._ids = undefined;
    //是否显示
    this.isshow = true;
}
Flow_lines.prototype.init = function () {

}
//创建流动线
/*
//数据示例
data = [
    [118.8271996, 31.8674921, 15, 118.8227986, 31.8652439, 15],
    [118.8154621,31.8652439, 15,118.8164758,31.8656828,15,118.8166756,31.8657693,15,118.8202789,31.8670334,15,118.8204214,31.8670834, 15,118.8210385,31.8672999,15,],
    ...
]
*/
Flow_lines.prototype.create = function (data, ids) {
    if (data && ids) {
        //处理数据到可用
        data.forEach(item => {
            let positions = Freedo.Cartesian3.fromDegreesArrayHeights(item);
            let route = {
                positions: positions,
                startTime: Math.random(),//开始流动时间
                duration: 5.0 + Math.random(),//流动的持续时间
                forward: true,
                round: false,
            };
            this.routes.push(route);
        });
        //创建流动线
        this.lines = this._mm.add('DynamicLine', {
            id: ids, //动态线的id
            routes: this.routes, //动态线的点集
            width: 3.0, //线宽 
            color: this._color,//颜色
        });
        this._ids = ids;
    }
}
//显示流动线
Flow_lines.prototype.show = function () {
    if (!this.lines && !this.isshow) {
        this.lines = this._mm.add('DynamicLine', {
            id: this._ids, //动态线的id
            routes: this.routes, //动态线的点集
            width: 3.0, //线宽 
            color: this._color,//颜色
        });
        this.isshow = true;
    }
}
//隐藏流动线
Flow_lines.prototype.hide = function () {
    if (this.lines &&  this.isshow) {
        this._mm.remove(this.lines);
        this.lines = undefined;
        this.isshow = false;
    }
}
//销毁流动线
Flow_lines.prototype.destory_lines = function () {
    if (this.lines) {
        this._mm.remove(this.lines);
        this.lines = undefined;
        this._ids = undefined;
        this.routes = [];
    }
}
export default Flow_lines;