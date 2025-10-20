const v1 = class {
}
function f2() {
    const v5 = Intl.DateTimeFormat;
    v5("pt", { hour12: true });
    return true;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
