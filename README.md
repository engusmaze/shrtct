# A really small js library for shortcutting default js methods and values

[![NPM package version](https://img.shields.io/npm/v/shrtct.svg?style=flat-square)](https://npmjs.org/package/shrtct)
[![NPM package size](https://img.shields.io/bundlephobia/min/shrtct?style=flat-square)](https://npmjs.org/package/shrtct)
[![Prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Dependencies status](https://img.shields.io/badge/dependencies-none-success)](https://npmjs.org/package/shrtct)

<!-- [![NPM downloads](https://img.shields.io/npm/dw/shrtct)](https://npmjs.org/package/shrtct) -->

-   [Shortcuts](#Basic-shortcuts)
    -   [Shortcuts for console](#Shortcuts-for-console)
    -   [Shortcuts for Math](#Shortcuts-for-Math)
        -   [Math constants](#Math-constants)
        -   [Math methods](#Math-methods)

## Shortcuts

### Shortcuts for console

Here are some shorter versions of console methods

console.log > print()<br>
console.error > error()<br>
console.trace > trace()<br>
console.assert > assert()

```js
let { print, error, trace, assert } = require("./shrtct");

print("Hello world");
error("Some error");
trace("some stack trace");
assert(false, "some assertion");
```

### Shortcuts for Math

#### Math constants

Math.PI > PI<br>
Number.EPSILON > EPS<br>
Math.E > E<br>
Math.LN10 > LN10<br>
Math.LN2 > LN2<br>
Math.LN2 > LN2<br>

```js
let {
	EPS,
	E,
	LN10,
	LN2,
	LOG2E,
	LOG10E,
	PI,
	SQRT1_2,
	SQRT2,
} = require("./shrtct");

print(PI); // 3.141592653589793
print(EPS); // 2.220446049250313e-16
print(E); // 2.718281828459045
print(LN10); // 2.302585092994046
print(LN2); // 0.6931471805599453
print(LOG2E); // 1.4426950408889634
print(LOG10E); // 0.4342944819032518
print(SQRT1_2); // 0.7071067811865476
print(SQRT2); // 1.4142135623730951
```

#### Math methods

And also some shortcuts for Math methods

Math.abs() > abs()<br>
Math.acos() > acos()<br>
Math.asin() > asin()<br>
Math.atan() > atan()<br>
Math.atan2() > atan2()<br>
Math.ceil() > ceil()<br>
Math.cos() > cos()<br>
Math.exp() > exp()<br>
Math.floor() > floor()<br>
Math.log() > log()<br>
Math.log10() > log10()<br>
Math.log2() > log2()<br>
Math.log1p() > log1p()<br>
Math.max() > max()<br>
Math.min() > min()<br>
Math.pow() > pow()<br>
Math.random() > random()<br>
Math.round() > round()<br>
Math.sin() > sin()<br>
Math.sqrt() > sqrt()<br>
Math.tan() > tan()<br>

```js
let {
	abs,
	acos,
	asin,
	atan,
	atan2,
	ceil,
	cos,
	exp,
	floor,
	log,
	log10,
	log2,
	log1p,
	max,
	min,
	pow,
	random,
	round,
	sin,
	sqrt,
	tan,
} = require("./shrtct");

print(abs(-548)); // 548
print(acos(1)); // 2.718281828459045
print(asin(1)); // 2.302585092994046
print(atan(PI)); // 1.2626272556789115
print(atan2(1, 1)); // 0.7853981633974483
print(ceil(PI)); // 4
print(cos(PI)); // -1
print(exp(PI)); // 23.140692632779267
print(floor(PI)); // 3
print(log(PI)); // 1.1447298858494002
print(log10(PI)); // 0.4971498726941338
print(log2(PI)); // 1.6514961294723187
print(log1p(PI)); // 1.4210804127942926
print(max(PI, 0)); // 3.141592653589793
print(min(PI, 0)); // 0
print(pow(PI, 2)); // 9.869604401089358
print(random()); // 0.8456462589423794
print(round(PI)); // 3
print(sin(PI)); // 1.2246467991473532e-16
print(sqrt(PI)); // 1.7724538509055159
print(tan(PI)); // -1.2246467991473532e-16
```
