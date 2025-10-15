const v2 = new BigInt64Array(11);
const v4 = class {
}
function f5() {
    return Intl.DateTimeFormat["supportedLocalesOf"](v2);
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
