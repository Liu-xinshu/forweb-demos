/***************************************************************
                   
                    创建者:那哲尘
                    创建时间:2020-8-18
                    更新者:那哲尘
                    更新时间:2020-8-19
                    方法作用:抽屉效果展示楼层

 **************************************************************/
function Control_Building(viewer, data, box_data) {
    //
    this._viewer = viewer
    //存放按照楼层存放的数据
    this.bulid_data = data || [];
    //存放楼层外框盒子的数组
    this.box_data = []
    //外框盒子颜色
    this.color_box = Freedo.Color.BLUE.withAlpha(0.3);
    //盒子高亮的颜色
    this.color_box_select = Freedo.Color.RED.withAlpha(0.8);
    //计时器
    this.int = undefined;
    //计数变量
    this.spread_int = 0
    this.openflour_int = 0
    //当前建筑展示模式 0为正常视图 1为拉伸起楼层 2为点击了其中一个楼层
    this.mod = 0;
    //用于鼠标事件参数
    this.lastEntity = null;
    this.selectEntity = null;
    //选中楼层编号
    this.selectFlour = null;
    //box的矢量点
    this.box_point = box_data;
}
Control_Building.prototype.init = function () {

}
//展开楼
Control_Building.prototype.spread_bulid = function (mod) {
    this.set_height("spread")
}
//收起楼
Control_Building.prototype.converge_bulid = function () {
    this.set_height("converge")
}
Control_Building.prototype.set_height = function (mod) {
    if (this.int == undefined) {
        this.close_flour();
        this.int = self.setInterval(() => {
            //展开开始事件
            if (mod == "spread" && this.mod == 0) this.spread_int++;
            //收起开始事件
            if (mod == "converge" && this.mod != 0) {
                this.clear_box();
                this.spread_int--;
            }
            this.bulid_data.forEach((element, index) => {
                element.pmts.forEach(i => {
                    var position = new Freedo.Cartesian3(i.pModel.modelMatrix[12], i.pModel.modelMatrix[13], i.pModel.modelMatrix[14])
                    var cartographic = Freedo.Cartographic.fromCartesian(position);
                    var longitude = Freedo.Math.toDegrees(cartographic.longitude);
                    var latitude = Freedo.Math.toDegrees(cartographic.latitude);
                    var pos = Freedo.Cartesian3.fromDegrees(longitude, latitude, (index + 3) * 0.1 * this.spread_int);
                    var modelMatrix = Freedo.Transforms.eastNorthUpToFixedFrame(pos);
                    i.pModel.modelMatrix = modelMatrix;
                })
            });
            //完成收起事件
            if (mod == "converge" && this.spread_int == 0) {
                clearInterval(this.int);
                this.int = undefined;
                this.mod = 0;
            }
            //完成展开事件
            if (mod == "spread" && this.spread_int >= 50) {
                clearInterval(this.int);
                this.int = undefined;
                this.mod = 1;
                this.draw_box();
            }
            this._viewer.scene.requestRender();
        }, 10);
    }
};
//绘制楼层包围盒子
Control_Building.prototype.draw_box = function () {
    var box_height = 8
    this.bulid_data.forEach((element, index) => {
        let i = element.pmts[0]
        let position = i.pModel.boundingSphere.center
        var cartographic = Freedo.Cartographic.fromCartesian(position);
        let entity = this._viewer.entities.add({
            name: "building_box",
            index: index,
            polygon: {
                hierarchy: Freedo.Cartesian3.fromDegreesArrayHeights(this.box_point),
                extrudedHeight: cartographic.height + box_height / 2,
                material: this.color_box,
                outline: false,
                height: cartographic.height - box_height / 2,
            }
        });
        this.box_data.push(entity);
        entity = this._viewer.entities.add({
            position: Freedo.Cartesian3.fromDegrees(116.45171746, 39.91051772, cartographic.height),
            label: {
                text: element.name,
                font: "23px Helvetica",
                // fillColor: color,
                outlineColor: Freedo.Color.BLACK,
                outlineWidth: 2,
                style: Freedo.LabelStyle.FILL_AND_OUTLINE,
            }
        });
        this.box_data.push(entity);
    });
};
//清除楼层包围盒子
Control_Building.prototype.clear_box = function () {
    this.box_data.forEach(i => {
        this._viewer.entities.remove(i)
    })
    this.box_data = [];
};
//左键点击事件
Control_Building.prototype.LEFT_CLICK = function (movement) {
    var pickedFeature = this._viewer.scene.pick(movement.position);
    if (this.selectEntity === null) {
        if (this.bool_pick(pickedFeature)) {
            this.close_flour();
            pickedFeature.id._polygon.material = this.color_box_select;
            this.open_flour(pickedFeature.id.index);
            this.selectEntity = pickedFeature;
        }
    } else {
        if (this.bool_pick(pickedFeature)) {
            this.close_flour();
            this.selectEntity.id._polygon.material = this.color_box;
            pickedFeature.id._polygon.material = this.color_box_select;
            this.open_flour(pickedFeature.id.index);
            this.selectEntity = pickedFeature;
        } else {
           /* this.selectEntity.id._polygon.material = this.color_box;
            this.selectEntity = null;*/
        }
    }
    this._viewer.scene.requestRender();
};
//鼠标点击事件
Control_Building.prototype.MOUSE_MOVE = function (movement) {
    var pickedFeature = this._viewer.scene.pick(movement.endPosition);
    if (this.lastEntity === null) {
        if (this.bool_pick(pickedFeature) && this.selectEntity === null) {
            pickedFeature.id._polygon.material = this.color_box_select;
            this.lastEntity = pickedFeature;
        }
    } else {
        if (this.bool_pick(pickedFeature) && this.selectEntity === null && this.lastEntity.id.index != pickedFeature.id.index) {
            pickedFeature.id._polygon.material = this.color_box_select;
            this.lastEntity.id._polygon.material = this.color_box;
            this.lastEntity = pickedFeature;
        } else if (!this.bool_pick(pickedFeature) && this.selectEntity === null) {
            this.lastEntity.id._polygon.material = this.color_box;
            this.lastEntity = null;
        }
    }
    this._viewer.scene.requestRender();
};
Control_Building.prototype.bool_pick = function (data) {
    if (typeof (data) != "undefined" && typeof (data.id) != "undefined" && data.id._name == "building_box") {
        return true
    } else {
        return false
    }
};
//抽出楼层
Control_Building.prototype.open_flour = function (ids) {
    this.bulid_data.forEach((i, index) => {
        if (index == ids && this.openflour_int == 0) {
            this.selectFlour = ids;
            this.int = self.setInterval(() => {
                this.openflour_int++;
                i.pmts.forEach(j => {
                    var position = new Freedo.Cartesian3(j.pModel.modelMatrix[12], j.pModel.modelMatrix[13], j.pModel.modelMatrix[14])
                    var cartographic = Freedo.Cartographic.fromCartesian(position);
                    var longitude = Freedo.Math.toDegrees(cartographic.longitude);
                    var latitude = Freedo.Math.toDegrees(cartographic.latitude);
                    var pos = Freedo.Cartesian3.fromDegrees(longitude, latitude + this.openflour_int * 0.000013, cartographic.height);
                    var modelMatrix = Freedo.Transforms.eastNorthUpToFixedFrame(pos);
                    j.pModel.modelMatrix = modelMatrix;

                })
                if (this.openflour_int >= 10) {
                    clearInterval(this.int);
                    this.int = undefined;
                    this.mod = 2;
                }
                this._viewer.scene.requestRender();
            }, 40)
        }
    })
};
Control_Building.prototype.close_flour = function () {
    clearInterval(this.int);
    this.int = undefined;
    var sum = 0;
    for (var j = 0; j <= this.openflour_int; j++) {
        sum = sum + j;
    }
    if (this.selectFlour != null) {
        this.bulid_data.forEach((i, index) => {
            if (index == this.selectFlour) {
                i.pmts.forEach(j => {
                    var position = new Freedo.Cartesian3(j.pModel.modelMatrix[12], j.pModel.modelMatrix[13], j.pModel.modelMatrix[14])
                    var cartographic = Freedo.Cartographic.fromCartesian(position);
                    var longitude = Freedo.Math.toDegrees(cartographic.longitude);
                    var latitude = Freedo.Math.toDegrees(cartographic.latitude);
                    var pos = Freedo.Cartesian3.fromDegrees(longitude, latitude - sum * 0.000013, cartographic.height);
                    var modelMatrix = Freedo.Transforms.eastNorthUpToFixedFrame(pos);
                    j.pModel.modelMatrix = modelMatrix;
                })
            }
        })
        this.openflour_int = 0;
        this.selectFlour = null;
        this.mod = 1;
    }
};
export default Control_Building;