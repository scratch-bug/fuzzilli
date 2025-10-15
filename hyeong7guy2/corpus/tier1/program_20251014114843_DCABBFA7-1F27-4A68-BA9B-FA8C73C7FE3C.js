function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return Array;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f9 });
}
new F2(Array, 10, Array);
