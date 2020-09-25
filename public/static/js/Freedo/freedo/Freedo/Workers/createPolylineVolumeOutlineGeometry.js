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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-7119db15","./IntersectionTests-0268f2ee","./Plane-c6867c84","./arrayRemoveDuplicates-1efed288","./BoundingRectangle-328fa973","./EllipsoidTangentPlane-29b9a994","./EllipsoidRhumbLine-fb5cc30d","./PolygonPipeline-b5df6024","./PolylineVolumeGeometryLibrary-f1014cb5","./EllipsoidGeodesic-b8e7c0c6","./PolylinePipeline-15ee8ac6"],function(d,e,i,c,a,u,t,n,y,r,o,f,h,l,g,m,s,p,v,E,b,P,_,k,C,L){"use strict";function T(e){var i=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polylinePositions,t=e.shapePositions;this._positions=i,this._shape=t,this._ellipsoid=u.Ellipsoid.clone(c.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=c.defaultValue(e.cornerType,k.CornerType.ROUNDED),this._granularity=c.defaultValue(e.granularity,a.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*u.Cartesian3.packedLength;n+=1+t.length*u.Cartesian2.packedLength,this.packedLength=n+u.Ellipsoid.packedLength+2}T.pack=function(e,i,t){var n;t=c.defaultValue(t,0);var a=e._positions,r=a.length;for(i[t++]=r,n=0;n<r;++n,t+=u.Cartesian3.packedLength)u.Cartesian3.pack(a[n],i,t);var o=e._shape;for(r=o.length,i[t++]=r,n=0;n<r;++n,t+=u.Cartesian2.packedLength)u.Cartesian2.pack(o[n],i,t);return u.Ellipsoid.pack(e._ellipsoid,i,t),t+=u.Ellipsoid.packedLength,i[t++]=e._cornerType,i[t]=e._granularity,i};var D=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),G={polylinePositions:void 0,shapePositions:void 0,ellipsoid:D,height:void 0,cornerType:void 0,granularity:void 0};T.unpack=function(e,i,t){var n;i=c.defaultValue(i,0);var a=e[i++],r=new Array(a);for(n=0;n<a;++n,i+=u.Cartesian3.packedLength)r[n]=u.Cartesian3.unpack(e,i);a=e[i++];var o=new Array(a);for(n=0;n<a;++n,i+=u.Cartesian2.packedLength)o[n]=u.Cartesian2.unpack(e,i);var l=u.Ellipsoid.unpack(e,i,D);i+=u.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(t)?(t._positions=r,t._shape=o,t._ellipsoid=u.Ellipsoid.clone(l,t._ellipsoid),t._cornerType=s,t._granularity=p,t):(G.polylinePositions=r,G.shapePositions=o,G.cornerType=s,G.granularity=p,new T(G))};var V=new E.BoundingRectangle;return T.createGeometry=function(e){var i=e._positions,t=v.arrayRemoveDuplicates(i,u.Cartesian3.equalsEpsilon),n=e._shape;if(n=k.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(t.length<2||n.length<3)){_.PolygonPipeline.computeWindingOrder2D(n)===_.WindingOrder.CLOCKWISE&&n.reverse();var a=E.BoundingRectangle.fromPoints(n,V);return function(e,i){var t=new g.GeometryAttributes;t.position=new h.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,a,r=i.length,o=t.position.values.length/3,l=e.length/3/r,s=m.IndexDatatype.createTypedArray(o,2*r*(1+l)),p=0,d=(n=0)*r;for(a=0;a<r-1;a++)s[p++]=a+d,s[p++]=a+d+1;for(s[p++]=r-1+d,s[p++]=d,d=(n=l-1)*r,a=0;a<r-1;a++)s[p++]=a+d,s[p++]=a+d+1;for(s[p++]=r-1+d,s[p++]=d,n=0;n<l-1;n++){var c=r*n,u=c+r;for(a=0;a<r;a++)s[p++]=a+c,s[p++]=a+u}return new h.Geometry({attributes:t,indices:m.IndexDatatype.createTypedArray(o,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:h.PrimitiveType.LINES})}(k.PolylineVolumeGeometryLibrary.computePositions(t,n,a,e,!1),n)}},function(e,i){return d.defined(i)&&(e=T.unpack(e,i)),e._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),T.createGeometry(e)}});
