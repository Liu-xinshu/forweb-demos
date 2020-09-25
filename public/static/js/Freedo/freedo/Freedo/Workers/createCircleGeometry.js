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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./AttributeCompression-4cb3e905","./GeometryPipeline-a3528e40","./EncodedCartesian3-272794dc","./IndexDatatype-7119db15","./IntersectionTests-0268f2ee","./Plane-c6867c84","./GeometryOffsetAttribute-0abfa3f6","./VertexFormat-b4c6d1c2","./EllipseGeometryLibrary-5630d8db","./GeometryInstance-ebdf70e5","./EllipseGeometry-78c55ed9"],function(o,e,t,r,i,n,a,l,s,d,m,c,u,p,y,_,h,G,f,x,g,b,v,E,w,A){"use strict";function C(e){var t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new A.EllipseGeometry(i),this._workerName="createCircleGeometry"}C.packedLength=A.EllipseGeometry.packedLength,C.pack=function(e,t,i){return A.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var M=new A.EllipseGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),V={center:new n.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new v.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return C.unpack=function(e,t,i){var r=A.EllipseGeometry.unpack(e,t,M);return V.center=n.Cartesian3.clone(r._center,V.center),V.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,V.ellipsoid),V.height=r._height,V.extrudedHeight=r._extrudedHeight,V.granularity=r._granularity,V.vertexFormat=v.VertexFormat.clone(r._vertexFormat,V.vertexFormat),V.stRotation=r._stRotation,V.shadowVolume=r._shadowVolume,o.defined(i)?(V.semiMajorAxis=r._semiMajorAxis,V.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new A.EllipseGeometry(V),i):(V.radius=r._semiMajorAxis,new C(V))},C.createGeometry=function(e){return A.EllipseGeometry.createGeometry(e._ellipseGeometry)},C.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,n=t(r,o),a=i(r,o);return new C({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:n,height:a,vertexFormat:v.VertexFormat.POSITION_ONLY,shadowVolume:!0})},a.defineProperties(C.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=C.unpack(e,t)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),C.createGeometry(e)}});
