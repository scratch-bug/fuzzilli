function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
            }
            function f16(a17) {
                const v18 = f16.caller;
                try { new v18(); } catch (e) {}
                return a17;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return a5;
    }
    f4(f4, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
new F0(F0, v22);
new F0();
