Uint32Array.year = Int32Array;
function f3() {
    return Int16Array(Symbol, Int16Array, Int16Array);
}
Int32Array[Symbol.toPrimitive] = f3;
const v7 = class {
}
function f8() {
    const t8 = Intl.DateTimeFormat;
    t8("os", Uint32Array);
    return Symbol;
}
Object.defineProperty(v7, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f8 });
try { new Int32Array(v7); } catch (e) {}
