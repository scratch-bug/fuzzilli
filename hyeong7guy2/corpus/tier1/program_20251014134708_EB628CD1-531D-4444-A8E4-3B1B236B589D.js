Object.defineProperty(BigUint64Array, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: Date });
const v5 = class {
}
function f6() {
    const v8 = Intl.DateTimeFormat;
    const v10 = { timeZone: BigUint64Array };
    v8("os", v10);
    return v10;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
