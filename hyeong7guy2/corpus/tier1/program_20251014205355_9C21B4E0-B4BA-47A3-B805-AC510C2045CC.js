function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a3;
            }
            function f16(a17) {
                const v19 = new Float32Array(a12, a6, a5);
                v19[5] = v19;
                function f20() {
                    const t12 = {};
                    t12.g = v19;
                    return a6;
                }
                return f20;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a3, F0, a6, F0);
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
const v25 = new F0(v24, v24);
new F0(v25, v25);
