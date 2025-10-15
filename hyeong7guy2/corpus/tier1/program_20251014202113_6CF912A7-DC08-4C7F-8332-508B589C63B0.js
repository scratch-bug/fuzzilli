function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        const v5 = {};
        v5.defineProperty = v5;
        function f7() {
            return f7;
        }
        const v8 = new Proxy(f7, v5);
        Object.defineProperty(v8, "toString", { writable: true, configurable: true, enumerable: true, value: f7 });
        return Proxy;
    }
    return f3;
}
function f9(a10) {
    return f9;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
try { new Uint16Array(f1); } catch (e) {}
