"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var a=s(function(q,t){
var n=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/constants-float64-pinf/dist');function N(e,r){return i(e)||i(r)||r<0||r>1||!n(e)||e===v?NaN:e*r*(1-r)}t.exports=N
});var c=a();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
