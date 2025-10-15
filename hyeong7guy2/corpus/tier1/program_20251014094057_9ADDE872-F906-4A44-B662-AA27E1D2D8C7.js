function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return this;
            }
            function f16(a17) {
                function F18(a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F18.call(a17); } catch (e) {}
                return a3;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a6, F0, a7, F0);
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v26 = new F0();
const t26 = v26.constructor;
new t26();
