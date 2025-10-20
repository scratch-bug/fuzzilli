const v0 = /[xyz]/usy;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v0[2570607183] >>= 5.450306676200284e+306;
            return f7;
        }
        f7(f7);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v11 = new F2();
v11.toString(5.450306676200284e+306, F2, v11, F2);
