const v0 = [1024,-9223372036854775808];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.constructor(); } catch (e) {}
            const v17 = a12.arguments;
            v17[0] = v17;
        }
        new F10(F2);
        return a9;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v20 = new F2();
const v21 = v20.constructor;
const v22 = new v21(v0, 28980);
const v23 = v20.constructor;
new v23(v23, v20, v21, v22, v21);
