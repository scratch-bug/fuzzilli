function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a6;
            }
            function f16(a17) {
                class C18 {
                    static get d() {
                    }
                }
                return a17;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9();
        for (let v21 = 0; v21 < 5; v21++) {
            /(fp*)/vi;
            function f23() {
                return a2;
            }
        }
    }
    f4(f4, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0(F0, F0);
new F0(v25, F0);
new F0();
