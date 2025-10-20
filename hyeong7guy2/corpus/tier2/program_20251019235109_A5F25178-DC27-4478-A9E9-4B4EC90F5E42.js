function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a11;
            }
            function f16(a17) {
                const v19 = class extends Uint32Array {
                }
                const v20 = new v19();
                v20.byteLength;
                return Uint32Array;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(F9, a2, a6, -1);
        return a5;
    }
    f4(F0, a2, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v25 = new F0();
new F0(v25, v25);
