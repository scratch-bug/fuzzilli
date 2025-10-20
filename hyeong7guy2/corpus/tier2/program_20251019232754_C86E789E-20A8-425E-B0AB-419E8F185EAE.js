function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9) {
                Symbol.for();
                return a3;
            }
            new Worker(f8, { type: "function" });
            return f6;
        }
        f6();
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(Symbol, F1);
v16.toString(v16, Symbol, F1);
