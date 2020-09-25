//img是流动的图片，img2是静态墙图片
function flowline(viewer, img) {
    this.viewer = viewer;
    this.positions = null;
    this.img = img;
    this.init();
    this.array = [];
}
flowline.prototype.init = function () {
    var that = this;
    function PolylineTrailLinkMaterialProperty(color, duration) {
        this._definitionChanged = new Cesium.Event();
        this._color = undefined;
        this._colorSubscription = undefined;
        this.color = color;
        this.duration = duration;
        this._time = (new Date()).getTime();
    }
    Object.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
        isConstant: {
            get: function () {
                return false;
            }
        },
        definitionChanged: {
            get: function () {
                return this._definitionChanged;
            }
        },
        color: Cesium.createPropertyDescriptor('color')
    });
    PolylineTrailLinkMaterialProperty.prototype.getType = function (time) {
        return 'PolylineTrailLink';
    }
    PolylineTrailLinkMaterialProperty.prototype.getValue = function (time, result) {
        if (!Cesium.defined(result)) {
            result = {};
        }
        result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color);
        result.image = Cesium.Material.PolylineTrailLinkImage;
        result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration;
        that.viewer.scene.requestRender();
        return result;
    }
    PolylineTrailLinkMaterialProperty.prototype.equals = function (other) {
        return this === other ||
            (other instanceof PolylineTrailLinkMaterialProperty )
             //  && Property.equals(this._color, other._color))
    }
    Cesium.PolylineTrailLinkMaterialProperty = PolylineTrailLinkMaterialProperty;
    Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
    Cesium.Material.PolylineTrailLinkImage = that.img;
    Cesium.Material.PolylineTrailLinkSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
                                            {\n\
                                            czm_material material = czm_getDefaultMaterial(materialInput);\n\
                                            vec2 st = materialInput.st;\n\
                                            vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
                                            material.alpha = colorImage.a * color.a;\n\
                                            material.diffuse = color.rgb;\n\
                                            return material;\n\
                                            }";
    Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType, {
        fabric: {
            type: Cesium.Material.PolylineTrailLinkType,
            uniforms: {
                color: new Cesium.Color(1.0, 1.0, 1.0, 1),
                image: Cesium.Material.PolylineTrailLinkImage,
                time: 0
            },
            source: Cesium.Material.PolylineTrailLinkSource
        },
        translucent: function (material) {
            return true;
        }
    });
}
//positions格式 [-107.0, 43.0, 100000.0,-97.0, 43.0, 100000.0,-97.0, 40.0, 100000.0,-107.0, 40.0, 100000.0,-107.0, 43.0, 100000.0]
flowline.prototype.add = function (positions, duration,r, g, b) {
    var line = this.viewer.entities.add({
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArrayHeights(positions),
            width: 15,
            //arcType: Cesium.ArcType.RHUMB,
            material: new Cesium.PolylineTrailLinkMaterialProperty(Freedo.Color.RED.withAlpha(0.8), duration),
            // material: new Cesium.PolylineTrailLinkMaterialProperty(new Cesium.Color(r/255,g/255,b/255,0.9), duration), 
        },
    })
    this.array.push(line);
    return this.array
}
flowline.prototype.remove = function (entity) {
    entity.forEach((item, array, self) => {
        this.viewer.entities.remove(item);
    });
}
export default flowline