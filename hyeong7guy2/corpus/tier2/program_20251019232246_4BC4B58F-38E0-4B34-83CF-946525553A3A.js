for (let i2 = 1, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function F13(a15, a16, a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19() {
            return this;
        }
        function f20(a21) {
            const v22 = [2.220446049250313e-16,8.25016265881146e+307,2.0,-5.499833051689735e+307,1000000000000.0,-2.220446049250313e-16];
            v22[3] += a16;
            return v22;
        }
        Object.defineProperty(this, "e", { get: f19, set: f20 });
        this.e = a12;
    }
    new F13();
    %OptimizeFunctionOnNextCall(F9);
}
const v24 = new F9(F9, F9);
const v25 = new F9(v24, v24);
new F9(v25, F9);
