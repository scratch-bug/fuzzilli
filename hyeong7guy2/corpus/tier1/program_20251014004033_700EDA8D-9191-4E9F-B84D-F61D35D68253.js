for (let i = 0; i < 5; i++) {
    function f1(a2, a3) {
        return f1;
    }
    WeakSet.constructor = f1;
    const v4 = WeakSet.constructor;
    function f5() {
        return f1;
    }
    function f6(a7) {
        return a7;
    }
    Object.defineProperty(v4, Symbol, { get: f5, set: f6 });
    v4.name;
}
