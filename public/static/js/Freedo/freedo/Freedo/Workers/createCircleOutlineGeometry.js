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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-7119db15","./GeometryOffsetAttribute-0abfa3f6","./EllipseGeometryLibrary-5630d8db","./EllipseOutlineGeometry-933dbc2e"],function(l,e,i,r,t,n,s,o,a,d,u,c,m,p,y,f,G,_,b){"use strict";function h(e){var i=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).radius,t={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new b.EllipseOutlineGeometry(t),this._workerName="createCircleOutlineGeometry"}h.packedLength=b.EllipseOutlineGeometry.packedLength,h.pack=function(e,i,t){return b.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var E=new b.EllipseOutlineGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),g={center:new n.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return h.unpack=function(e,i,t){var r=b.EllipseOutlineGeometry.unpack(e,i,E);return g.center=n.Cartesian3.clone(r._center,g.center),g.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,g.ellipsoid),g.height=r._height,g.extrudedHeight=r._extrudedHeight,g.granularity=r._granularity,g.numberOfVerticalLines=r._numberOfVerticalLines,l.defined(t)?(g.semiMajorAxis=r._semiMajorAxis,g.semiMinorAxis=r._semiMinorAxis,t._ellipseGeometry=new b.EllipseOutlineGeometry(g),t):(g.radius=r._semiMajorAxis,new h(g))},h.createGeometry=function(e){return b.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return l.defined(i)&&(e=h.unpack(e,i)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),h.createGeometry(e)}});
