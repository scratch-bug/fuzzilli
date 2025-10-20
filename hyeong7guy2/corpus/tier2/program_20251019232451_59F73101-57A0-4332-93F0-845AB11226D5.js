function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a5;
            }
            function f16(a17) {
                try { parseInt.apply(a2, a17); } catch (e) {}
                return parseInt;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return F9;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0(F0, F0);
const t22 = v22.constructor;
new t22();
new F0();
