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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./AttributeCompression-4cb3e905","./GeometryPipeline-a3528e40","./EncodedCartesian3-272794dc","./IndexDatatype-7119db15","./IntersectionTests-0268f2ee","./Plane-c6867c84","./GeometryInstance-ebdf70e5","./arrayRemoveDuplicates-1efed288","./EllipsoidTangentPlane-29b9a994","./OrientedBoundingBox-dd67ef28","./CoplanarPolygonGeometryLibrary-b1fdf390","./ArcType-c72d871a","./EllipsoidRhumbLine-fb5cc30d","./PolygonPipeline-b5df6024","./PolygonGeometryLibrary-74b4b63e"],function(i,e,t,a,r,c,n,o,d,y,l,p,s,u,f,m,b,g,h,P,G,v,L,T,C,E,k,H,w,A){"use strict";function I(e){for(var t=e.length,r=new Float64Array(3*t),n=h.IndexDatatype.createTypedArray(t,2*t),o=0,i=0,a=0;a<t;a++){var y=e[a];r[o++]=y.x,r[o++]=y.y,r[o++]=y.z,n[i++]=a,n[i++]=(a+1)%t}var l=new f.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new s.Geometry({attributes:l,indices:n,primitiveType:s.PrimitiveType.LINES})}function _(e){var t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=A.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}_.fromPositions=function(e){return new _({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},_.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=A.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var D={polygonHierarchy:{}};return _.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=A.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var o=e[t];return i.defined(r)||(r=new _(D)),r._polygonHierarchy=n,r.packedLength=o,r},_.createGeometry=function(e){var t=e._polygonHierarchy,r=t.positions;if(!((r=L.arrayRemoveDuplicates(r,c.Cartesian3.equalsEpsilon,!0)).length<3)&&E.CoplanarPolygonGeometryLibrary.validOutline(r)){var n=A.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var o=[],i=0;i<n.length;i++){var a=new v.GeometryInstance({geometry:I(n[i])});o.push(a)}var y=b.GeometryPipeline.combineInstances(o)[0],l=d.BoundingSphere.fromPoints(t.positions);return new s.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:l})}}},function(e,t){return i.defined(t)&&(e=_.unpack(e,t)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),_.createGeometry(e)}});
