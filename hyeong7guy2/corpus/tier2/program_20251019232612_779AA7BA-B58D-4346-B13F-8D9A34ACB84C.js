const v0 = class {
}
const v3 = class {
}
function f4() {
    Intl.supportedValuesOf(v0);
    return Intl;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
