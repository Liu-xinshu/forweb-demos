/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
var scope;if(typeof window!=='undefined'){scope=window;scope.Freedo=Cesium;}else if(typeof self!=='undefined'){scope=self;scope.Freedo = Cesium;}else if(typeof module!=='undefined'){scope=module;scope.exports=Cesium;scope.Freedo=module.exports;}else{scope={};scope.Freedo=Cesium;console.log('Unable to load Cesium.');}scope.Freedo.FreedoPModel=Cesium.Cesium3DTile;scope.Freedo.FreedoPModelContent=Cesium.Cesium3DTileContent;scope.Freedo.FreedoPModelsInspector=Cesium.Cesium3DTilesInspector;scope.Freedo.FreedoPModelColorBlendMode=Cesium.Cesium3DTileColorBlendMode;scope.Freedo.FreedoPModelFeature=Cesium.Cesium3DTileFeature;scope.Freedo.FreedoPModelsInspectorViewModel=Cesium.Cesium3DTilesInspectorViewModel;scope.Freedo.FreedoPModelset=Cesium.Cesium3DTileset;scope.Freedo.FreedoPModelStyle=Cesium.Cesium3DTileStyle;scope.Freedo.FreedoMath=Cesium.CesiumMath;scope.Freedo.FreedoWidget=Cesium.CesiumWidget;scope.Freedo.FreedoInspector=Cesium.CesiumInspector;scope.Freedo.FreedoInspectorViewModel=Cesium.CesiumInspectorViewModel;scope.Freedo.FreedoTerrainProvider=Cesium.CesiumTerrainProvider;scope.Freedo.viewerFreedoInspectorMixin=Cesium.viewerCesiumInspectorMixin;scope.Freedo.viewerFreedoPModelInspectorMixin=Cesium.viewerCesium3DTilesInspectorMixin;scope.FreeDo=scope.Freedo;