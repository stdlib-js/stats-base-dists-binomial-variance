// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).variance=n()}(this,(function(){"use strict";var e=Math.floor;var n=function(n){return e(n)===n&&n>=0};var t=function(e){return e!=e},o=Number.POSITIVE_INFINITY,f=n,r=t,i=o;return function(e,n){return r(e)||r(n)||n<0||n>1||!f(e)||e===i?NaN:e*n*(1-n)}}));
//# sourceMappingURL=bundle.js.map
