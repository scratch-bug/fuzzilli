function f0() {
    return f0;
}
function f1() {
    const v2 = {};
    v2.getOwnPropertyDescriptor = v2;
    function f4() {
        return Proxy;
    }
    const v5 = new Proxy(f4, v2);
    v5.prototype = v5;
    return v2;
}
function f6(a7) {
    return f1;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f6 });
try { new Uint16Array(f0); } catch (e) {}
