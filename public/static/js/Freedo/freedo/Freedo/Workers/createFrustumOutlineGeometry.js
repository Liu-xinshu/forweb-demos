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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d","./Transforms-c1305e13","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-569c1e3e","./GeometryAttribute-7f79e7d6","./when-c208a7cf","./GeometryAttributes-c3465b51","./Plane-c6867c84","./VertexFormat-b4c6d1c2","./FrustumGeometry-64896669"],function(s,e,t,p,r,m,n,a,f,u,i,h,g,o,_,c,d,k){"use strict";var l=0,y=1;function v(e){var t,r,n=e.frustum,a=e.orientation,u=e.origin,i=p.defaultValue(e._drawNearPlane,!0);n instanceof k.PerspectiveFrustum?(t=l,r=k.PerspectiveFrustum.packedLength):n instanceof k.OrthographicFrustum&&(t=y,r=k.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=m.Cartesian3.clone(u),this._orientation=f.Quaternion.clone(a),this._drawNearPlane=i,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+m.Cartesian3.packedLength+f.Quaternion.packedLength}v.pack=function(e,t,r){r=p.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return(t[r++]=n)===l?(k.PerspectiveFrustum.pack(a,t,r),r+=k.PerspectiveFrustum.packedLength):(k.OrthographicFrustum.pack(a,t,r),r+=k.OrthographicFrustum.packedLength),m.Cartesian3.pack(e._origin,t,r),r+=m.Cartesian3.packedLength,f.Quaternion.pack(e._orientation,t,r),t[r+=f.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var F=new k.PerspectiveFrustum,w=new k.OrthographicFrustum,P=new f.Quaternion,b=new m.Cartesian3;return v.unpack=function(e,t,r){t=p.defaultValue(t,0);var n,a=e[t++];a===l?(n=k.PerspectiveFrustum.unpack(e,t,F),t+=k.PerspectiveFrustum.packedLength):(n=k.OrthographicFrustum.unpack(e,t,w),t+=k.OrthographicFrustum.packedLength);var u=m.Cartesian3.unpack(e,t,b);t+=m.Cartesian3.packedLength;var i=f.Quaternion.unpack(e,t,P),o=1===e[t+=f.Quaternion.packedLength];if(!s.defined(r))return new v({frustum:n,origin:u,orientation:i,_drawNearPlane:o});var c=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(c),r._frustumType=a,r._origin=m.Cartesian3.clone(u,r._origin),r._orientation=f.Quaternion.clone(i,r._orientation),r._drawNearPlane=o,r},v.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,u=e._drawNearPlane,i=new Float64Array(24);k.FrustumGeometry._computeNearFarPlanes(n,a,t,r,i);for(var o,c,s=new _.GeometryAttributes({position:new g.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i})}),p=u?2:1,m=new Uint16Array(8*(1+p)),d=u?0:1;d<2;++d)c=4*d,m[o=u?8*d:0]=c,m[o+1]=c+1,m[o+2]=c+1,m[o+3]=c+2,m[o+4]=c+2,m[o+5]=c+3,m[o+6]=c+3,m[o+7]=c;for(d=0;d<2;++d)c=4*d,m[o=8*(p+d)]=c,m[o+1]=c+4,m[o+2]=c+1,m[o+3]=c+5,m[o+4]=c+2,m[o+5]=c+6,m[o+6]=c+3,m[o+7]=c+7;return new g.Geometry({attributes:s,indices:m,primitiveType:g.PrimitiveType.LINES,boundingSphere:f.BoundingSphere.fromVertices(i)})},function(e,t){return s.defined(t)&&(e=v.unpack(e,t)),v.createGeometry(e)}});
