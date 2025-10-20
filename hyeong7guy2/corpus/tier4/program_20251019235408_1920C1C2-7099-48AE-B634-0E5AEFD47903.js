function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const v16 = a15 / a15;
            v16 ^ v16;
        }
        new F10(a3, Int8Array, f4, a2);
        new F10(Int8Array, 1825, F10, 1825);
        return F0;
    }
    f4(F0, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0(F0, F0);
const v22 = v21.constructor;
const v23 = new v22(F0, v22);
new F0(v23, v22);
