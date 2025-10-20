function f5() {
    const v7 = Temporal.PlainDateTime;
    new v7(-9223372036854775807, 0, 6, 0, 0, -9223372036854775807, 7, 0, 7, Temporal);
    return v7;
}
BigUint64Array.toString = f5;
const v10 = class {
}
function f11() {
    const v13 = Intl.DateTimeFormat;
    return v13("os", { timeZone: BigUint64Array });
}
Object.defineProperty(v10, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f11 });
try { new Int32Array(v10); } catch (e) {}
