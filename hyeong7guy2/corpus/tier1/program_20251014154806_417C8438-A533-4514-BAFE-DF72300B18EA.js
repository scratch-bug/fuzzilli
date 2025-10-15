function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a7;
            }
            function f16(a17) {
                const v18 = [f4,f4,f4,f4];
                try { v18.findIndex(); } catch (e) {}
                return a7;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(F0, a7, -1, a3);
        return a5;
    }
    f4(f4, this, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0(F0, F0);
new F0(v22, F0);
new F0(v22, F0);
