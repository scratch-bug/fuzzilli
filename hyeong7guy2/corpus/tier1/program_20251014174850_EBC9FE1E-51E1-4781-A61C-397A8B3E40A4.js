const v2 = class {
}
function f3() {
    Intl.DateTimeFormat.supportedLocalesOf();
    return Symbol;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
