function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return -1;
            }
            function f17(a18) {
                Object.create(Uint16Array);
                return a14;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10(a7, F10, a7, Uint16Array);
        return f5;
    }
    f5(Uint16Array, this, a3);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(Uint16Array, F1);
new F1();
new F1();
