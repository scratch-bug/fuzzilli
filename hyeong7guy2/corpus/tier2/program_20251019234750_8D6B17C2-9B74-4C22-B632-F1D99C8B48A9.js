const v2 = class {
}
function f3() {
    const t3 = Intl.DateTimeFormat;
    t3("ot-");
    return Intl;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
