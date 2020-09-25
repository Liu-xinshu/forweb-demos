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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./AttributeCompression-4cb3e905","./GeometryPipeline-a3528e40","./EncodedCartesian3-272794dc","./IndexDatatype-7119db15","./IntersectionTests-0268f2ee","./Plane-c6867c84","./PrimitivePipeline-63c8b08e","./WebMercatorProjection-3d8e7edb","./createTaskProcessorWorker"],function(f,e,r,t,n,i,o,a,c,s,d,u,b,m,l,p,y,P,k,v,C,h,G,T){"use strict";var W={};function j(e){var r=W[e];return f.defined(r)||("object"==typeof exports?W[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){W[r=e]=e})),r}return T(function(e,r){for(var t=e.subTasks,n=t.length,i=new Array(n),o=0;o<n;o++){var a=t[o],c=a.geometry,s=a.moduleName;if(f.defined(s)){var d=j(s);i[o]=d(c,a.offset)}else i[o]=c}return m.when.all(i,function(e){return h.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
