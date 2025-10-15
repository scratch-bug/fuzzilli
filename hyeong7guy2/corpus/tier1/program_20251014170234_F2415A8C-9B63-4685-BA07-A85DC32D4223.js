Uint32Array.year = Int32Array;
const v3 = class {
}
function f4() {
    const t4 = Intl.DateTimeFormat;
    t4("os", Uint32Array);
    return Intl;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
