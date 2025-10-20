const v2 = class {
}
function f3() {
    const v5 = Intl.DateTimeFormat;
    const v6 = v5.prototype;
    v6.resolvedOptions(v6, Symbol);
    return v5;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
