// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t=Math.floor,r=Math.ceil;function e(n){return n<0?r(n):t(n)}var o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;function f(n){return n===i||n===o}var u,a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,y=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol.toStringTag:"",p=a&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,o,i;if(null==n)return c.call(n);r=n[l],i=l,t=null!=(o=n)&&y.call(o,i);try{n[l]=void 0}catch(t){return c.call(n)}return e=c.call(n),t?n[l]=r:delete n[l],e}:function(n){return c.call(n)},v="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(v&&r instanceof Uint32Array||"[object Uint32Array]"===p(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var w,U=u,d="function"==typeof Float64Array,m="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;w=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m([1,3.14,-3.14,NaN]),r=t,n=(d&&r instanceof Float64Array||"[object Float64Array]"===p(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?h:function(){throw new Error("not implemented")};var s,I=w,N="function"==typeof Uint8Array,g="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var n,t,r;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,256,257]),r=t,n=(N&&r instanceof Uint8Array||"[object Uint8Array]"===p(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?F:function(){throw new Error("not implemented")};var S,H=s,O="function"==typeof Uint16Array,T="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var n,t,r;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,65536,65537]),r=t,n=(O&&r instanceof Uint16Array||"[object Uint16Array]"===p(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?j:function(){throw new Error("not implemented")};var E,G={uint16:S,uint8:H};(E=new G.uint16(1))[0]=4660;var L,W,M=52===new G.uint8(E.buffer)[0];!0===M?(L=1,W=0):(L=0,W=1);var x={HIGH:L,LOW:W},P=new I(1),V=new U(P.buffer),Y=x.HIGH,_=x.LOW;function k(n,t){return P[0]=t,n[0]=V[Y],n[1]=V[_],n}function q(n,t){return 1===arguments.length?k([0,0],n):k(n,t)}var z,B,C=!0===M?1:0,D=new I(1),J=new U(D.buffer);function K(n){return D[0]=n,J[C]}!0===M?(z=1,B=0):(z=0,B=1);var Q={HIGH:z,LOW:B},R=new I(1),X=new U(R.buffer),Z=Q.HIGH,$=Q.LOW;function nn(n,t){return X[Z]=n,X[$]=t,R[0]}var tn=[0,0];function rn(t,r){return n(r)||f(r)?(t[0]=r,t[1]=0,t):0!==r&&function(n){return Math.abs(n)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var en=[0,0],on=[0,0];function fn(t,r){var e,u,a,c,y;return 0===r||0===t||n(t)||f(t)?t:(function(n,t){1===arguments.length?rn([0,0],n):rn(n,t)}(en,t),r+=en[1],r+=function(n){var t=K(n);return(t=(2146435072&t)>>>20)-1023|0}(t=en[0]),r<-1074?(a=t,q(tn,0),c=tn[0],c&=2147483647,y=K(a),nn(c|=y&=2147483648,tn[1])):r>1023?t<0?o:i:(r<=-1023?(r+=52,u=2220446049250313e-31):u=1,q(on,t),e=on[0],e&=2148532223,u*nn(e|=r+1023<<20,on[1])))}var un=1.4426950408889634,an=1/(1<<28);function cn(t){var r;return n(t)||t===i?t:t===o?0:t>709.782712893384?i:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<an?1+t:function(n,t,r){var e,o,i,f;return fn(1-(t-(e=n-t)*(i=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),r)}(t-.6931471803691238*(r=e(t<0?un*t-.5:un*t+.5)),1.9082149292705877e-10*r,r)}return function(t,r){var e,o;return n(t)||n(r)||r<=0?NaN:(e=cn(4*(o=r*r)),e+=2*cn(3*o),e+=3*cn(2*o),e-=6)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).kurtosis=t();
//# sourceMappingURL=index.js.map
