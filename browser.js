// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return r!=r}var t=Math.floor,e=Math.ceil;function n(r){return r<0?e(r):t(r)}var i=Number,a=i.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,u=i.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,l=i.NEGATIVE_INFINITY;function s(r){return r===f||r===l}var p="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function d(r){return"number"==typeof r}function g(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function h(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+g(i):g(i)+r,n&&(r="-"+r)),r}var w=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function b(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!d(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=h(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=h(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===v.call(r.specifier)?v.call(e):w.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function m(r){return"string"==typeof r}var A=Math.abs,F=String.prototype.toLowerCase,I=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,N=/e-(\d)$/,T=/^(\d+)$/,S=/^(\d+)e/,U=/\.0$/,j=/\.0*e/,k=/(\..*[^0])0*e/;function x(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=E.call(e,k,"$1e"),e=E.call(e,j,"e"),e=E.call(e,U,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=E.call(e,_,"e+0$1"),e=E.call(e,N,"e-0$1"),r.alternate&&(e=E.call(e,T,"$1."),e=E.call(e,S,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===I.call(r.specifier)?I.call(e):F.call(e)}function O(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function V(r,t,e){var n=t-r.length;return n<0?r:r=e?r+O(n):O(n)+r}var G=String.fromCharCode,H=isNaN,W=Array.isArray;function $(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function L(r){var t,e,n,i,a,o,c,u,f;if(!W(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(m(n=r[u]))o+=n;else{if(t=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,H(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,H(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!H(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=H(a)?String(n.arg):G(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=V(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function R(r){var t,e,n,i;for(e=[],i=0,n=P.exec(r);n;)(t=r.slice(i,P.lastIndex-n[0].length)).length&&e.push(t),e.push(C(n)),i=P.lastIndex,n=P.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function Y(r){return"string"==typeof r}function Z(r){var t,e;if(!Y(r))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[R(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return L.apply(null,t)}var M=Object.prototype,X=M.toString,z=M.__defineGetter__,q=M.__defineSetter__,B=M.__lookupGetter__,D=M.__lookupSetter__,J=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?y:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===X.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===X.call(e))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(B.call(r,t)||D.call(r,t)?(n=r.__proto__,r.__proto__=M,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&z&&z.call(r,t,e.get),o&&q&&q.call(r,t,e.set),r};function K(r,t,e){J(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Q,rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"",ar=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,a;if(null==r)return tr.call(r);e=r[ir],a=ir,t=null!=(i=r)&&er.call(i,a);try{r[ir]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[ir]=e:delete r[ir],n}:function(r){return tr.call(r)},or="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(or&&e instanceof Uint32Array||"[object Uint32Array]"===ar(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=Q,sr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr([1,3.14,-3.14,NaN]),e=t,r=(sr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr=fr,hr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),e=t,r=(hr&&e instanceof Uint8Array||"[object Uint8Array]"===ar(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,mr=dr,Ar="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Ir="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Ar&&e instanceof Uint16Array||"[object Uint16Array]"===ar(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Er,_r={uint16:br,uint8:mr};(Er=new _r.uint16(1))[0]=4660;var Nr,Tr,Sr=52===new _r.uint8(Er.buffer)[0];!0===Sr?(Nr=1,Tr=0):(Nr=0,Tr=1);var Ur={HIGH:Nr,LOW:Tr},jr=new gr(1),kr=new lr(jr.buffer),xr=Ur.HIGH,Or=Ur.LOW;function Vr(r,t,e,n){return jr[0]=r,t[n]=kr[xr],t[n+e]=kr[Or],t}function Gr(r){return Vr(r,[0,0],1,0)}K(Gr,"assign",Vr);var Hr,Wr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),e=t,r=(Wr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Pr=!0===Sr?1:0,Cr=new Hr(1),Rr=new lr(Cr.buffer);function Yr(r){return Cr[0]=r,Rr[Pr]}var Zr,Mr,Xr,zr="function"==typeof Float64Array,qr="function"==typeof Float64Array?Float64Array:null,Br="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),e=t,r=(zr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===Sr?(Mr=1,Xr=0):(Mr=0,Xr=1);var Dr={HIGH:Mr,LOW:Xr},Jr=new Zr(1),Kr=new lr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var et=[0,0];function nt(t,e,n,i){return r(t)||s(t)?(e[i]=t,e[i+n]=0,e):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(e[i]=4503599627370496*t,e[i+n]=-52,e):(e[i]=t,e[i+n]=0,e)}K((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var it,at,ot,ct="function"==typeof Float64Array,ut="function"==typeof Float64Array?Float64Array:null,ft="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,t,e;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,NaN]),e=t,r=(ct&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")},!0===Sr?(at=1,ot=0):(at=0,ot=1);var lt={HIGH:at,LOW:ot},st=new it(1),pt=new lr(st.buffer),yt=lt.HIGH,dt=lt.LOW;function gt(r,t,e,n){return st[0]=r,t[n]=pt[yt],t[n+e]=pt[dt],t}function ht(r){return gt(r,[0,0],1,0)}K(ht,"assign",gt);var wt=[0,0],vt=[0,0];function bt(t,e){var n,i,a,o,f,l;return 0===e||0===t||r(t)||s(t)?t:(nt(t,wt,1,0),e+=wt[1],e+=function(r){var t=Yr(r);return(t=(2146435072&t)>>>20)-1023|0}(t=wt[0]),e<-1074?(a=0,o=t,Gr.assign(a,et,1,0),f=et[0],f&=2147483647,l=Yr(o),tt(f|=l&=2147483648,et[1])):e>1023?t<0?u:c:(e<=-1023?(e+=52,i=2220446049250313e-31):i=1,ht.assign(t,vt,1,0),n=vt[0],n&=2148532223,i*tt(n|=e+1023<<20,vt[1])))}var mt=1.4426950408889634,At=1/(1<<28);function Ft(t){var e;return r(t)||t===o?t:t===a?0:t>709.782712893384?o:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<At?1+t:function(r,t,e){var n,i,a,o;return bt(1-(t-(n=r-t)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(t-.6931471803691238*(e=n(t<0?mt*t-.5:mt*t+.5)),1.9082149292705877e-10*e,e)}return function(t,e){var n,i;return r(t)||r(e)||e<=0?NaN:(n=Ft(4*(i=e*e)),n+=2*Ft(3*i),n+=3*Ft(2*i),n-=6)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=t();
//# sourceMappingURL=browser.js.map