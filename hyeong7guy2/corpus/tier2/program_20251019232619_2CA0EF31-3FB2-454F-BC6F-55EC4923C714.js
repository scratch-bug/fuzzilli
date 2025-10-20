const t0 = Temporal.PlainDate;
const v3 = new t0(6, 6, 6);
const v4 = v3.toPlainDateTime();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return a18;
            }
            function f21(a22) {
                return v4;
            }
            Object.defineProperty(this, "e", { get: f20, set: f21 });
            this.e = -1;
        }
        new F14(this, f9, F14, F14);
        return a11;
    }
    f9(a7, v3, this);
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
const v26 = new F5();
const t25 = v26.constructor;
new t25();
