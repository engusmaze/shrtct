<style>
    f {
        color: #66b0ed;
    }
    cf {
        color:#59b7c2;
    }
    c {
        color: #e4bf80;
    }
    cn {
        color: #d0996a;
    }
    v {
        color: #df6a76;
    }
</style>

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

<c>console</c>.<f>log</f> > <f>print</f>()<br>
<c>console</c>.<f>error</f> > <f>error</f>()<br>
<c>console</c>.<f>trace</f> > <f>trace</f>()<br>
<c>console</c>.<f>assert</f> > <f>assert</f>()

```js
let { print, error, trace, assert } = require("./shrtct");

print("Hello world");
error("Some error");
trace("some stack trace");
assert(false, "some assertion");
```

### Shortcuts for Math

#### Math constants

<c>Math</c>.<cn>PI</cn> > <c>PI</c><br>
<c>Number</c>.<cn>EPSILON</cn> > <c>EPS</c><br>
<c>Math</c>.<cn>E</cn> > <c>E</c><br>
<c>Math</c>.<cn>LN10</cn> > <c>LN10</c><br>
<c>Math</c>.<cn>LN2</cn> > <c>LN2</c><br>
<c>Math</c>.<cn>LN2</cn> > <c>LN2<c><br>

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

<c>Math</c>.<cf>abs</cf>() > <f>abs</f>()<br>
<c>Math</c>.<cf>acos</cf>() > <f>acos</f>()<br>
<c>Math</c>.<cf>asin</cf>() > <f>asin</f>()<br>
<c>Math</c>.<cf>atan</cf>() > <f>atan</f>()<br>
<c>Math</c>.<cf>atan2</cf>() > <f>atan2</f>()<br>
<c>Math</c>.<cf>ceil</cf>() > <f>ceil</f>()<br>
<c>Math</c>.<cf>cos</cf>() > <f>cos</f>()<br>
<c>Math</c>.<cf>exp</cf>() > <f>exp</f>()<br>
<c>Math</c>.<cf>floor</cf>() > <f>floor</f>()<br>
<c>Math</c>.<cf>log</cf>() > <f>log</f>()<br>
<c>Math</c>.<cf>log10</cf>() > <f>log10</f>()<br>
<c>Math</c>.<cf>log2</cf>() > <f>log2</f>()<br>
<c>Math</c>.<cf>log1p</cf>() > <f>log1p</f>()<br>
<c>Math</c>.<cf>max</cf>() > <f>max</f>()<br>
<c>Math</c>.<cf>min</cf>() > <f>min</f>()<br>
<c>Math</c>.<cf>pow</cf>() > <f>pow</f>()<br>
<c>Math</c>.<cf>random</cf>() > <f>random</f>()<br>
<c>Math</c>.<cf>round</cf>() > <f>round</f>()<br>
<c>Math</c>.<cf>sin</cf>() > <f>sin</f>()<br>
<c>Math</c>.<cf>sqrt</cf>() > <f>sqrt</f>()<br>
<c>Math</c>.<cf>tan</cf>() > <f>tan</f>()<br>

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
