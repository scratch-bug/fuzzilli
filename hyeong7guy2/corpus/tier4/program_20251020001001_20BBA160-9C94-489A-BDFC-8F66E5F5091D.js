BigUint64Array.days = 1000000.0;
const t1 = Intl.DurationFormat;
const v4 = new t1();
v4.formatToParts(BigUint64Array);
