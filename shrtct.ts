const m = Math;

export let nav: Navigator, win: Window, doc: Document;
if (typeof window !== "undefined") {
	nav = navigator;
	doc = document;
	win = window;
	Object.seal(nav);
	Object.seal(doc);
	Object.seal(win);
}

Math.log10;
console.error();

export const // Some console logging stuff
	/** Outputs a message to the console */
	print = console.log,
	/** Outputs an error message to the Web console. */
	error = console.error,
	/** Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. */
	assert = console.assert,
	/** Outputs a stack trace to the console. */
	trace = console.trace,
	// Some time stuff
	/** Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. */
	time = Date.now,
	// Some constant numbers,
	/**
	 * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
	 * that is representable as a Number value, which is approximately:
	 * 2.2204460492503130808472633361816 x 10‍−‍16.
	 */
	EPS = Number.EPSILON,
	/** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
	E = m.E,
	/** The natural logarithm of 10. */
	LN10 = m.LN10,
	/** The natural logarithm of 2. */
	LN2 = m.LN2,
	/** The base-2 logarithm of e. */
	LOG2E = m.LOG2E,
	/** The base-10 logarithm of e. */
	LOG10E = m.LOG10E,
	/** Pi. This is the ratio of the circumference of a circle to its diameter. */
	PI = m.PI,
	/** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
	SQRT1_2 = m.SQRT1_2,
	/** The square root of 2. */
	SQRT2 = m.SQRT2,
	// Some math stuff
	/**
	 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
	 * For example, the absolute value of -5 is the same as the absolute value of 5.
	 * @param x A numeric expression for which the absolute value is needed.
	 */
	abs = m.abs,
	/**
	 * Returns the arc cosine (or inverse cosine) of a number.
	 * @param x A numeric expression.
	 */
	acos = m.acos,
	/**
	 * Returns the arcsine of a number.
	 * @param x A numeric expression.
	 */
	asin = m.asin,
	/**
	 * Returns the arctangent of a number.
	 * @param x A numeric expression for which the arctangent is needed.
	 */
	atan = m.atan,
	/**
	 * Returns the angle (in radians) from the X axis to a point.
	 * @param y A numeric expression representing the cartesian y-coordinate.
	 * @param x A numeric expression representing the cartesian x-coordinate.
	 */
	atan2 = m.atan2,
	/**
	 * Returns the smallest integer greater than or equal to its numeric argument.
	 * @param x A numeric expression.
	 */
	ceil = m.ceil,
	/**
	 * Returns the cosine of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	cos = m.cos,
	/**
	 * Returns e (the base of natural logarithms) raised to a power.
	 * @param x A numeric expression representing the power of e.
	 */
	exp = m.exp,
	/**
	 * Returns the greatest integer less than or equal to its numeric argument.
	 * @param x A numeric expression.
	 */
	floor = m.floor,
	/**
	 * Returns the natural logarithm (base e) of a number.
	 * @param x A numeric expression.
	 */
	log = m.log,
	/**
	 * Returns the base 10 logarithm of a number.
	 * @param x A numeric expression.
	 */
	log10 = m.log10,
	/**
	 * Returns the base 2 logarithm of a number.
	 * @param x A numeric expression.
	 */
	log2 = m.log2,
	/**
	 * Returns the natural logarithm of 1 + x.
	 * @param x A numeric expression.
	 */
	log1p = m.log1p,
	/**
	 * Returns the larger of a set of supplied numeric expressions.
	 * @param values Numeric expressions to be evaluated.
	 */
	max = m.max,
	/**
	 * Returns the smaller of a set of supplied numeric expressions.
	 * @param values Numeric expressions to be evaluated.
	 */
	min = m.min,
	/**
	 * Returns the value of a base expression taken to a specified power.
	 * @param x The base value of the expression.
	 * @param y The exponent value of the expression.
	 */
	pow = m.pow,
	/** Returns a pseudorandom number between 0 and 1. */
	random = m.random,
	/**
	 * Returns a supplied numeric expression rounded to the nearest integer.
	 * @param x The value to be rounded to the nearest integer.
	 */
	round = m.round,
	/**
	 * Returns the sine of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	sin = m.sin,
	/**
	 * Returns the square root of a number.
	 * @param x A numeric expression.
	 */
	sqrt = m.sqrt,
	/**
	 * Returns the tangent of a number.
	 * @param x A numeric expression that contains an angle measured in radians.
	 */
	tan = m.tan;
