/********************************************************************* 
 * 
 * 
 * 
                      创建者：那哲尘
                      创建时间：2020-9-18
                      修改者：那哲尘
                      修改时间：2020-9-21
                      简介：主要用于前端三维功能实现和调用

 * 
 * 
 * 
**********************************************************************/
import axios from 'axios';
import flowline from './flowline';

function Earth(containerId) {
  this._viewer = undefined;
  this._containerId = containerId;
  this._ModelManager = undefined;
  this.pmtsManager = undefined;
  this._pathsManager = undefined;
  this._analysisManager = undefined;
  this._firstPersonControl = undefined;
  this.layertree = [];
  this.models = [];
  this.area_neng = []
  //初始化执行
  this.init();
  this.billboards = [];
  //当前三维属性
  this.mod = "index"
  this.ParticleSystem = [];
  this.dataflow  = [];
}

/**
 * 地球对象初始化操作
 */
Earth.prototype.init = function () {
  let viewer = (this._viewer = Freedo.FdApp.createDefaultViewer(
    this._containerId, {}, {
    hasProvinceBoundaries: true, // 是否绘制中国省界
    showNewDefImagery: true,
  }
  ));
  viewer.scene.requestRenderMode = false;
  viewer.scene.highDynamicRange = false;
  viewer.showLogo = false;
}

export default Earth;