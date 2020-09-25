/***************************************************************
                   
                    创建者:那哲尘
                    创建时间:2020-8-18
                    更新者:那哲尘
                    更新时间:2020-8-19
                    方法作用:创建呼吸警报点

 **************************************************************/

function Alert_Point(viewer, data ,path) {
    //
    this._viewer = viewer
    //图片地址
    this.path = path;
    //
    this.entity = null
    this.init(data);
}
//创建警报点
/*
//数据示例
{lon:116.333,lat:39.333,height:1000}
*/
Alert_Point.prototype.init = function (data) {
    this.entity = this._viewer.entities.add({
        position: Freedo.Cartesian3.fromDegrees(data.lon, data.lat, data.height),
        billboard: {
            scale: 1,
            image: this.path,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
        }
    });
    this.entity.addProperty("imageClock");
    // 用计时器控制图标的闪烁
    var second = 1;
    this.entity.imageClock = setInterval( () =>{
        if (this.entity != null) {
            second -= 0.07;
            this.entity.billboard.color = new FreeDo.Color(1, 1, 1, second);;
            if (second < 0.1) {
                second = 0.9;
            }
        }
    }, 200);
    return this.entity

}
export default Alert_Point;