const v2 = class {
}
function f3() {
    const t3 = Intl.DateTimeFormat;
    const t4 = t3().resolvedOptions;
    t4();
    return f3;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
