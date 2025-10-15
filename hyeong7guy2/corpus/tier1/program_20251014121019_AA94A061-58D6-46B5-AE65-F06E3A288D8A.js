const v2 = class {
}
function f3() {
    const v5 = Intl.DateTimeFormat;
    v5("os", { timeZone: Intl });
    return Intl;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
