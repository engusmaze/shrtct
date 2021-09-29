"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tan = exports.sqrt = exports.sin = exports.round = exports.random = exports.pow = exports.min = exports.max = exports.log1p = exports.log2 = exports.log10 = exports.log = exports.floor = exports.exp = exports.cos = exports.ceil = exports.atan2 = exports.atan = exports.asin = exports.acos = exports.abs = exports.SQRT2 = exports.SQRT1_2 = exports.PI = exports.LOG10E = exports.LOG2E = exports.LN2 = exports.LN10 = exports.E = exports.EPS = exports.time = exports.trace = exports.assert = exports.error = exports.print = exports.doc = exports.win = exports.nav = void 0;
const m = Math;
if (typeof window !== "undefined") {
    exports.nav = navigator;
    exports.doc = document;
    exports.win = window;
    Object.seal(exports.nav);
    Object.seal(exports.doc);
    Object.seal(exports.win);
}
Math.log10;
console.error();
exports.print = console.log, exports.error = console.error, exports.assert = console.assert, exports.trace = console.trace, exports.time = Date.now, exports.EPS = Number.EPSILON, exports.E = m.E, exports.LN10 = m.LN10, exports.LN2 = m.LN2, exports.LOG2E = m.LOG2E, exports.LOG10E = m.LOG10E, exports.PI = m.PI, exports.SQRT1_2 = m.SQRT1_2, exports.SQRT2 = m.SQRT2, exports.abs = m.abs, exports.acos = m.acos, exports.asin = m.asin, exports.atan = m.atan, exports.atan2 = m.atan2, exports.ceil = m.ceil, exports.cos = m.cos, exports.exp = m.exp, exports.floor = m.floor, exports.log = m.log, exports.log10 = m.log10, exports.log2 = m.log2, exports.log1p = m.log1p, exports.max = m.max, exports.min = m.min, exports.pow = m.pow, exports.random = m.random, exports.round = m.round, exports.sin = m.sin, exports.sqrt = m.sqrt, exports.tan = m.tan;
