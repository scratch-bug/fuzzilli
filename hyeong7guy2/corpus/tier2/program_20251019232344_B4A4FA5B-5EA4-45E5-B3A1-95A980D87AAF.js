function f0() {
    const v1 = {};
    function f2() {
        return f2;
    }
    function f3() {
        return f2;
    }
    function f4(a5) {
        return v1;
    }
    Object.defineProperty(f2, "set", { configurable: true, enumerable: true, get: f3, set: f4 });
    Object.defineProperty(v1, "getOwnPropertyDescriptor", { configurable: true, enumerable: true, get: f2, set: f2 });
    function f7() {
        return f7;
    }
    const v8 = new Proxy(f7, v1);
    v8.prototype = v8;
    return f0;
}
try { f0(); } catch (e) {}
