BigUint64Array.milliseconds = -15;
Object.defineProperty(BigUint64Array, "weeks", { configurable: true, enumerable: true, value: -15 });
const t2 = Intl.DurationFormat;
const v4 = new t2();
v4.formatToParts(BigUint64Array);
