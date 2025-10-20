class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C10 extends Uint32Array {
        }
        class C11 {
        }
        C0.g = C11;
        const v13 = {};
        const t11 = {};
        t11.g = -2147483648;
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = C11;
        }
        return this;
    }
    f5(C0, f5, C0);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
