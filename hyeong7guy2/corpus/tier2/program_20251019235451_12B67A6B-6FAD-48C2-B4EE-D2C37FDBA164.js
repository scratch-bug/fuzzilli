function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a3;
            }
            function f16(a17) {
                return this;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        let v18;
        try { v18 = F9.apply(); } catch (e) {}
        const v19 = new F9(f4, F0, F9, v18);
        const v20 = v19.e;
        try { new v20(); } catch (e) {}
        return v18;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
const v24 = new F0(F0, v23);
new F0(F0, v24);
