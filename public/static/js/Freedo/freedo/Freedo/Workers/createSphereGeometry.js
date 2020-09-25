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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-7119db15","./GeometryOffsetAttribute-0abfa3f6","./VertexFormat-b4c6d1c2","./EllipsoidGeometry-aa57515a"],function(a,e,t,i,r,o,n,s,d,c,l,m,u,f,p,y,G,b,k){"use strict";function v(e){var t=i.defaultValue(e.radius,1),r={radii:new o.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new k.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}v.packedLength=k.EllipsoidGeometry.packedLength,v.pack=function(e,t,r){return k.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var x=new k.EllipsoidGeometry,P={radius:void 0,radii:new o.Cartesian3,vertexFormat:new b.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return v.unpack=function(e,t,r){var i=k.EllipsoidGeometry.unpack(e,t,x);return P.vertexFormat=b.VertexFormat.clone(i._vertexFormat,P.vertexFormat),P.stackPartitions=i._stackPartitions,P.slicePartitions=i._slicePartitions,a.defined(r)?(o.Cartesian3.clone(i._radii,P.radii),r._ellipsoidGeometry=new k.EllipsoidGeometry(P),r):(P.radius=i._radii.x,new v(P))},v.createGeometry=function(e){return k.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return a.defined(t)&&(e=v.unpack(e,t)),v.createGeometry(e)}});
