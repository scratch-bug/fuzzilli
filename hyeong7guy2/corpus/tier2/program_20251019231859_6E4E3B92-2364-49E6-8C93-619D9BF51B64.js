const v2 = class {
}
function f3() {
    const t3 = Intl.NumberFormat;
    const v7 = t3().formatToParts;
    v7(Intl);
    return v7;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
