function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                Array.prototype.keys.apply(this, []);
                return a5;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return f4;
    }
    f4(f4, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    function f31(a32) {
        new F0();
        return f31;
    }
    f31();
    f31();
}
new F27();
