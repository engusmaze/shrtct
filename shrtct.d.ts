export declare let nav: Navigator, win: Window, doc: Document;
export declare const // Some console logging stuff
/** Outputs a message to the console */
print: (...data: any[]) => void, 
/** Outputs an error message to the Web console. */
error: (...data: any[]) => void, 
/** Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. */
assert: (condition?: boolean | undefined, ...data: any[]) => void, 
/** Outputs a stack trace to the console. */
trace: (...data: any[]) => void, 
/** Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. */
time: () => number, 
/**
 * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
 * that is representable as a Number value, which is approximately:
 * 2.2204460492503130808472633361816 x 10‍−‍16.
 */
EPS: number, 
/** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
E: number, 
/** The natural logarithm of 10. */
LN10: number, 
/** The natural logarithm of 2. */
LN2: number, 
/** The base-2 logarithm of e. */
LOG2E: number, 
/** The base-10 logarithm of e. */
LOG10E: number, 
/** Pi. This is the ratio of the circumference of a circle to its diameter. */
PI: number, 
/** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
SQRT1_2: number, 
/** The square root of 2. */
SQRT2: number, 
/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 */
abs: (x: number) => number, 
/**
 * Returns the arc cosine (or inverse cosine) of a number.
 * @param x A numeric expression.
 */
acos: (x: number) => number, 
/**
 * Returns the arcsine of a number.
 * @param x A numeric expression.
 */
asin: (x: number) => number, 
/**
 * Returns the arctangent of a number.
 * @param x A numeric expression for which the arctangent is needed.
 */
atan: (x: number) => number, 
/**
 * Returns the angle (in radians) from the X axis to a point.
 * @param y A numeric expression representing the cartesian y-coordinate.
 * @param x A numeric expression representing the cartesian x-coordinate.
 */
atan2: (y: number, x: number) => number, 
/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x A numeric expression.
 */
ceil: (x: number) => number, 
/**
 * Returns the cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
cos: (x: number) => number, 
/**
 * Returns e (the base of natural logarithms) raised to a power.
 * @param x A numeric expression representing the power of e.
 */
exp: (x: number) => number, 
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x A numeric expression.
 */
floor: (x: number) => number, 
/**
 * Returns the natural logarithm (base e) of a number.
 * @param x A numeric expression.
 */
log: (x: number) => number, 
/**
 * Returns the base 10 logarithm of a number.
 * @param x A numeric expression.
 */
log10: (x: number) => number, 
/**
 * Returns the base 2 logarithm of a number.
 * @param x A numeric expression.
 */
log2: (x: number) => number, 
/**
 * Returns the natural logarithm of 1 + x.
 * @param x A numeric expression.
 */
log1p: (x: number) => number, 
/**
 * Returns the larger of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
max: (...values: number[]) => number, 
/**
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
min: (...values: number[]) => number, 
/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
pow: (x: number, y: number) => number, 
/** Returns a pseudorandom number between 0 and 1. */
random: () => number, 
/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x The value to be rounded to the nearest integer.
 */
round: (x: number) => number, 
/**
 * Returns the sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
sin: (x: number) => number, 
/**
 * Returns the square root of a number.
 * @param x A numeric expression.
 */
sqrt: (x: number) => number, 
/**
 * Returns the tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
tan: (x: number) => number;
