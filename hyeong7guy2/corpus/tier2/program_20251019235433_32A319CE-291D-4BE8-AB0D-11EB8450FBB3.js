const v2 = class {
}
function f3() {
    function f4() {
        return f4;
    }
    const v5 = {};
    v5.era = f4;
    const v8 = new Date();
    v8.toLocaleTimeString("of", v5);
    return Date;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
