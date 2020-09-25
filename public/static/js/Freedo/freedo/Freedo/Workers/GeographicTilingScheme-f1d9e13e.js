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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Math-92bd3539","./Cartesian2-8fa798b8","./defineProperties-ae15c9d5","./objectToQuery-2e382d4d"],function(e,g,t,i,f,d,r,n){"use strict";function o(e){e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT),this._ellipsoid=i.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84),this._rectangle=i.defaultValue(e.rectangle,d.Rectangle.MAX_VALUE),this._projection=new n.GeographicProjection(this._ellipsoid),this._numberOfLevelZeroTilesX=i.defaultValue(e.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=i.defaultValue(e.numberOfLevelZeroTilesY,1)}r.defineProperties(o.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}}}),o.prototype.getNumberOfXTilesAtLevel=function(e){return g.defined(e)||(e=0),this._numberOfLevelZeroTilesX*Math.pow(2,e)},o.prototype.getNumberOfYTilesAtLevel=function(e){return g.defined(e)||(e=0),this._numberOfLevelZeroTilesY*Math.pow(2,e)},o.prototype.rectangleToNativeRectangle=function(e,t){var i=f.CesiumMath.toDegrees(e.west),r=f.CesiumMath.toDegrees(e.south),n=f.CesiumMath.toDegrees(e.east),o=f.CesiumMath.toDegrees(e.north);return g.defined(t)?(t.west=i,t.south=r,t.east=n,t.north=o,t):new d.Rectangle(i,r,n,o)},o.prototype.tileXYToNativeRectangle=function(e,t,i,r){var n=this.tileXYToRectangle(e,t,i,r);return n.west=f.CesiumMath.toDegrees(n.west),n.south=f.CesiumMath.toDegrees(n.south),n.east=f.CesiumMath.toDegrees(n.east),n.north=f.CesiumMath.toDegrees(n.north),n},o.prototype.tileXYToRectangle=function(e,t,i,r){var n=this._rectangle,o=this.getNumberOfXTilesAtLevel(i),s=this.getNumberOfYTilesAtLevel(i),l=n.width/o,a=e*l+n.west,u=(e+1)*l+n.west,h=n.height/s,f=n.north-t*h,c=n.north-(t+1)*h;return g.defined(r)||(r=new d.Rectangle(a,c,u,f)),r.west=a,r.south=c,r.east=u,r.north=f,r},o.prototype.positionToTileXY=function(e,t,i){var r=this._rectangle;if(d.Rectangle.contains(r,e)){var n=this.getNumberOfXTilesAtLevel(t),o=this.getNumberOfYTilesAtLevel(t),s=r.width/n,l=r.height/o,a=e.longitude;r.east<r.west&&(a+=f.CesiumMath.TWO_PI);var u=(a-r.west)/s|0;n<=u&&(u=n-1);var h=(r.north-e.latitude)/l|0;return o<=h&&(h=o-1),g.defined(i)?(i.x=u,i.y=h,i):new d.Cartesian2(u,h)}},e.GeographicTilingScheme=o});
