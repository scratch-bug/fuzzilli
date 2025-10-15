function f1() {
    return 1.0;
}
const v4 = class {
}
function f5() {
    Intl.toString = f1;
    const v7 = Intl.DateTimeFormat;
    v7("os", { timeZone: Intl });
    return 1.0;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
