let { print, error, trace, assert } = require("./shrtct");

print("Hello world");
error("Some error");
trace("some stack trace");
assert(false, "some assertion");

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

print(EPS); // 2.220446049250313e-16
print(E); // 2.718281828459045
print(LN10); // 2.302585092994046
print(LN2); // 0.6931471805599453
print(LOG2E); // 1.4426950408889634
print(LOG10E); // 0.4342944819032518
print(PI); // 3.141592653589793
print(SQRT1_2); // 0.7071067811865476
print(SQRT2); // 1.4142135623730951

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
