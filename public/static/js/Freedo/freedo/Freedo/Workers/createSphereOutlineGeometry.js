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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-7119db15","./GeometryOffsetAttribute-0abfa3f6","./EllipsoidOutlineGeometry-7f91ecca"],function(n,e,i,r,t,o,a,s,d,l,c,u,f,p,m,y,G,b){"use strict";function k(e){var i=r.defaultValue(e.radius,1),t={radii:new o.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new b.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}k.packedLength=b.EllipsoidOutlineGeometry.packedLength,k.pack=function(e,i,t){return b.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var v=new b.EllipsoidOutlineGeometry,O={radius:void 0,radii:new o.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return k.unpack=function(e,i,t){var r=b.EllipsoidOutlineGeometry.unpack(e,i,v);return O.stackPartitions=r._stackPartitions,O.slicePartitions=r._slicePartitions,O.subdivisions=r._subdivisions,n.defined(t)?(o.Cartesian3.clone(r._radii,O.radii),t._ellipsoidGeometry=new b.EllipsoidOutlineGeometry(O),t):(O.radius=r._radii.x,new k(O))},k.createGeometry=function(e){return b.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=k.unpack(e,i)),k.createGeometry(e)}});
