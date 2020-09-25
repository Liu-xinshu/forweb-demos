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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./Math-92bd3539","./Cartesian2-8fa798b8","./objectToQuery-2e382d4d","./GeometryAttribute-7f79e7d6"],function(t,m,n,b,O,a,G){"use strict";var p=Math.cos,v=Math.sin,x=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i=n.radiiSquared,g=t.nwCorner,u=t.boundingRectangle,h=g.latitude-t.granYCos*r+e*t.granXSin,c=p(h),C=v(h),l=i.z*C,d=g.longitude+r*t.granYSin+e*t.granXCos,S=c*p(d),w=c*v(d),M=i.x*S,f=i.y*w,X=x(M*S+f*w+l*C);if(o.x=M/X,o.y=f/X,o.z=l/X,a){var Y=t.stNwCorner;m.defined(Y)?(h=Y.latitude-t.stGranYCos*r+e*t.stGranXSin,d=Y.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(h-t.stSouth)*t.latScalar):(s.x=(d-u.west)*t.lonScalar,s.y=(h-u.south)*t.latScalar)}}},y=new G.Matrix2,R=new O.Cartesian3,P=new O.Cartographic,W=new O.Cartesian3,_=new a.GeographicProjection;function j(t,n,a,r,e,o,s){var i=Math.cos(n),g=r*i,u=a*i,h=Math.sin(n),c=r*h,C=a*h;R=_.project(t,R),R=O.Cartesian3.subtract(R,W,R);var l=G.Matrix2.fromRotation(n,y);R=G.Matrix2.multiplyByVector(l,R,R),R=O.Cartesian3.add(R,W,R),o-=1,s-=1;var d=(t=_.unproject(R,t)).latitude,S=d+o*C,w=d-g*s,M=d-g*s+o*C,f=Math.max(d,S,w,M),X=Math.min(d,S,w,M),Y=t.longitude,m=Y+o*u,p=Y+s*c,v=Y+s*c+o*u;return{north:f,south:X,east:Math.max(Y,m,p,v),west:Math.min(Y,m,p,v),granYCos:g,granYSin:c,granXCos:u,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i,g,u,h,c,C=t.east,l=t.west,d=t.north,S=t.south,w=!1,M=!1;d===b.CesiumMath.PI_OVER_TWO&&(w=!0),S===-b.CesiumMath.PI_OVER_TWO&&(M=!0);var f=d-S;u=(c=C<l?b.CesiumMath.TWO_PI-l+C:C-l)/((i=Math.ceil(c/n)+1)-1),h=f/((g=Math.ceil(f/n)+1)-1);var X=O.Rectangle.northwest(t,o),Y=O.Rectangle.center(t,P);0===a&&0===r||(Y.longitude<X.longitude&&(Y.longitude+=b.CesiumMath.TWO_PI),W=_.project(Y,W));var m=h,p=u,v=O.Rectangle.clone(t,e),G={granYCos:m,granYSin:0,granXCos:p,granXSin:0,nwCorner:X,boundingRectangle:v,width:i,height:g,northCap:w,southCap:M};if(0!==a){var x=j(X,a,u,h,0,i,g);d=x.north,S=x.south,C=x.east,l=x.west,G.granYCos=x.granYCos,G.granYSin=x.granYSin,G.granXCos=x.granXCos,G.granXSin=x.granXSin,v.north=d,v.south=S,v.east=C,v.west=l}if(0!==r){a-=r;var y=O.Rectangle.northwest(v,s),R=j(y,a,u,h,0,i,g);G.stGranYCos=R.granYCos,G.stGranXCos=R.granXCos,G.stGranYSin=R.granYSin,G.stGranXSin=R.granXSin,G.stNwCorner=y,G.stWest=R.west,G.stSouth=R.south}return G},t.RectangleGeometryLibrary=r});
