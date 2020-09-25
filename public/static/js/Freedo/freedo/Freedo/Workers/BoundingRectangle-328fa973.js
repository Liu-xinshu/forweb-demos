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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Cartesian2-8fa798b8","./objectToQuery-2e382d4d","./Transforms-c1305e13"],function(e,c,t,r,a,n,d){"use strict";function x(e,t,n,i){this.x=r.defaultValue(e,0),this.y=r.defaultValue(t,0),this.width=r.defaultValue(n,0),this.height=r.defaultValue(i,0)}x.packedLength=4,x.pack=function(e,t,n){return n=r.defaultValue(n,0),t[n++]=e.x,t[n++]=e.y,t[n++]=e.width,t[n]=e.height,t},x.unpack=function(e,t,n){return t=r.defaultValue(t,0),c.defined(n)||(n=new x),n.x=e[t++],n.y=e[t++],n.width=e[t++],n.height=e[t],n},x.fromPoints=function(e,t){if(c.defined(t)||(t=new x),!c.defined(e)||0===e.length)return t.x=0,t.y=0,t.width=0,t.height=0,t;for(var n=e.length,i=e[0].x,h=e[0].y,r=e[0].x,a=e[0].y,d=1;d<n;d++){var u=e[d],f=u.x,o=u.y;i=Math.min(f,i),r=Math.max(f,r),h=Math.min(o,h),a=Math.max(o,a)}return t.x=i,t.y=h,t.width=r-i,t.height=a-h,t};var u=new n.GeographicProjection,f=new a.Cartographic,o=new a.Cartographic;x.fromRectangle=function(e,t,n){if(c.defined(n)||(n=new x),!c.defined(e))return n.x=0,n.y=0,n.width=0,n.height=0,n;var i=(t=r.defaultValue(t,u)).project(a.Rectangle.southwest(e,f)),h=t.project(a.Rectangle.northeast(e,o));return a.Cartesian2.subtract(h,i,h),n.x=i.x,n.y=i.y,n.width=h.x,n.height=h.y,n},x.clone=function(e,t){if(c.defined(e))return c.defined(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new x(e.x,e.y,e.width,e.height)},x.union=function(e,t,n){c.defined(n)||(n=new x);var i=Math.min(e.x,t.x),h=Math.min(e.y,t.y),r=Math.max(e.x+e.width,t.x+t.width),a=Math.max(e.y+e.height,t.y+t.height);return n.x=i,n.y=h,n.width=r-i,n.height=a-h,n},x.expand=function(e,t,n){n=x.clone(e,n);var i=t.x-n.x,h=t.y-n.y;return i>n.width?n.width=i:i<0&&(n.width-=i,n.x=t.x),h>n.height?n.height=h:h<0&&(n.height-=h,n.y=t.y),n},x.intersect=function(e,t){var n=e.x,i=e.y,h=t.x,r=t.y;return n>h+t.width||n+e.width<h||i+e.height<r||i>r+t.height?d.Intersect.OUTSIDE:d.Intersect.INTERSECTING},x.equals=function(e,t){return e===t||c.defined(e)&&c.defined(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},x.prototype.clone=function(e){return x.clone(this,e)},x.prototype.intersect=function(e){return x.intersect(this,e)},x.prototype.equals=function(e){return x.equals(this,e)},e.BoundingRectangle=x});
