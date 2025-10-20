const v2 = class {
}
function f3() {
    const v6 = Intl.DateTimeFormat.prototype;
    v6.formatRangeToParts();
    return v6;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
