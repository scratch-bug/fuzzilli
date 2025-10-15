const v0 = class {
}
class C1 extends v0 {
}
function f3(a4) {
    return C1;
}
BigInt64Array[Symbol.toPrimitive] = f3;
const v8 = class {
}
function f9() {
    const v11 = Intl.DateTimeFormat;
    const v13 = {};
    v13.calendar = BigInt64Array;
    return v11("os", v13);
}
Object.defineProperty(v8, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f9 });
try { new Int32Array(v8); } catch (e) {}
