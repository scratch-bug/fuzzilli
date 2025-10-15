const v1 = class {
}
function f2() {
    const v5 = Intl.DateTimeFormat;
    const v7 = {};
    v7.hourCycle = 7;
    v5("os", v7);
    return 7;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
