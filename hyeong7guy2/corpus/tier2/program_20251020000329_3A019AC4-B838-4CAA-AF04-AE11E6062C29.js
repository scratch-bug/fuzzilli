class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return f16;
            }
            function f17(a18) {
                ([-59161,-38111,-8,41058,-10044,-1255646682,256]).slice(false);
                const v23 = Math.expm1();
                function f24(a25, a26, a27) {
                    const v28 = { [v23]: a18 };
                    return a27;
                }
                f24();
                const v30 = f24();
                f24();
                f24();
                f24(f16, f24, a15);
                f24();
                const v35 = f24();
                f24(v35, a15, v35);
                f24(f5, a14, false);
                f24();
                %PrepareFunctionForOptimization(f24);
                f24(v30, v35, f24());
                %OptimizeMaglevOnNextCall(f24);
                f24();
                const v43 = class extends Uint32Array {
                }
                new v43();
                return -1;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        Math.cos(C0);
        Math.sqrt(C0);
        new F10();
        return F1;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v50 = new F1(F1, F1);
const v51 = new F1(C0, v50);
new F1(v51, C0);
