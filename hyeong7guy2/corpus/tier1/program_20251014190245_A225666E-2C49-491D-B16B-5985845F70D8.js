function f1(a2, a3) {
    return 209;
}
BigInt64Array[Symbol.toPrimitive] = f1;
const v8 = class {
}
function f9() {
    const v11 = Intl.DateTimeFormat;
    const v13 = {};
    v13.calendar = BigInt64Array;
    v11("os", v13);
    return "os";
}
Object.defineProperty(v8, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f9 });
try { new Int32Array(v8); } catch (e) {}
