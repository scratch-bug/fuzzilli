function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a6;
            }
            function f16(a17) {
                function F18(a20, a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v24 = 0; v24 < 5; v24++) {
                }
                return Math.expm1(F18);
            }
            try { f16.call(a7, a5, f15); } catch (e) {}
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(-1, a2, a2, F0);
        return a7;
    }
    f4(a2, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v29 = new F0(F0, F0);
const v30 = new F0(v29, v29);
const t28 = v30.constructor;
new t28();
