const v2 = class {
}
function f3() {
    const v5 = Intl.DateTimeFormat;
    const v7 = {};
    v7.timeZone = "string";
    v5("os", v7);
    return Intl;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
