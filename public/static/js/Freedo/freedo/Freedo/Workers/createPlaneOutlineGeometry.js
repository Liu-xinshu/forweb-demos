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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51"],function(r,e,t,n,a,i,o,u,c,d,f,s,y,p,m){"use strict";function b(){this._workerName="createPlaneOutlineGeometry"}b.packedLength=0,b.pack=function(e,t){return t},b.unpack=function(e,t,n){return r.defined(n)?n:new b};var w=new i.Cartesian3(-.5,-.5,0),G=new i.Cartesian3(.5,.5,0);return b.createGeometry=function(){var e=new m.GeometryAttributes,t=new Uint16Array(8),n=new Float64Array(12);return n[0]=w.x,n[1]=w.y,n[2]=w.z,n[3]=G.x,n[4]=w.y,n[5]=w.z,n[6]=G.x,n[7]=G.y,n[8]=w.z,n[9]=w.x,n[10]=G.y,n[11]=w.z,e.position=new y.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new y.Geometry({attributes:e,indices:t,primitiveType:y.PrimitiveType.LINES,boundingSphere:new c.BoundingSphere(i.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return r.defined(t)&&(e=b.unpack(e,t)),b.createGeometry(e)}});
