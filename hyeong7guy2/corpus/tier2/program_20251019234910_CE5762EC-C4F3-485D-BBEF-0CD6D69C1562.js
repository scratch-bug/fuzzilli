const v1 = class {
}
function f2() {
    const v4 = Intl.DateTimeFormat;
    const v6 = {};
    function f7() {
        return f2;
    }
    function f8(a9) {
        return a9;
    }
    Object.defineProperty(v6, "timeZone", { get: f7, set: f8 });
    v4("os", v6);
    return v6;
}
f2.toString = f2;
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
