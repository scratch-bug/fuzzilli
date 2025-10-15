for (let i = 0; i < 5; i++) {
    function f2() {
        return WeakSet;
    }
    function f3(a4) {
        return f2;
    }
    Object.defineProperty(WeakSet, Symbol, { configurable: true, enumerable: true, get: f2, set: f3 });
}
