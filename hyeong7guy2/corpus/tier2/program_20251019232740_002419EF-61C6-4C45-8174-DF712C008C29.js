class C1 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return 3433;
            }
            function f17(a18) {
                const v19 = typeof a18;
                let v20 = undefined;
                v20 = C1;
                return v19;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = 3433;
        }
        const v21 = new F10(a5, F10, a9, this);
        v21.e = v21;
        return a9;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v23 = new F2(F2, F2);
const v24 = new F2(F2, C1);
new F2(v23, v24);
