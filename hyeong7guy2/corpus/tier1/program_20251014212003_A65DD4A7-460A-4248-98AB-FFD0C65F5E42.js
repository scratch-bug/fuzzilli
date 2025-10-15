function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                function f18(a19, a20, a21) {
                    const v22 = { [a13]: a17 };
                    return a3;
                }
                f18();
                f18();
                f18();
                f18();
                f18();
                f18();
                const v30 = class extends Uint32Array {
                }
                new v30();
                return a11;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0();
const v35 = new F0(v34, v34);
new F0(v35, v34);
