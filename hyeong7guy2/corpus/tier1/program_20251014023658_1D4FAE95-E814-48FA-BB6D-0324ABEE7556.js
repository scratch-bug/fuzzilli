function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return f5;
    }
    Object.defineProperty(globalThis, "obj", { configurable: true, enumerable: true, get: f5 });
}
new F0();
new F0(F0, F0);
