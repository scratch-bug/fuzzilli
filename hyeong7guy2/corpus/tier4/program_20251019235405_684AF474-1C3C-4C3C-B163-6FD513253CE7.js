function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a13 / a13;
        }
        const v16 = new F9(a6, F0, -9007199254740992n);
        const t8 = v16.constructor;
        new t8(f4, a3, F0);
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0();
const t16 = v20.constructor;
const v22 = new t16();
const t18 = v22.constructor;
new t18();
