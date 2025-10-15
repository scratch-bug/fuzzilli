const v1 = class {
}
function f2() {
    const v4 = Intl.DateTimeFormat;
    const v6 = {};
    v6.numberingSystem = f2;
    return v4("os", v6);
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
