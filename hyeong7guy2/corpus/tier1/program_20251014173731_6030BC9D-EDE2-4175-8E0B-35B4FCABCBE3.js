function f1() {
    const v2 = {};
    function f3() {
        return Array;
    }
    function f4(a5) {
        return f4;
    }
    Object.defineProperty(v2, "getOwnPropertyDescriptor", { configurable: true, enumerable: true, get: f3, set: f4 });
    function f7() {
        return f1;
    }
    const v8 = new Proxy(f7, v2);
    v8.prototype = v8;
    return f7;
}
function f9(a10) {
    return f1;
}
const v11 = f9.apply(f1, f9);
try { v11(f9, Array, f1); } catch (e) {}
