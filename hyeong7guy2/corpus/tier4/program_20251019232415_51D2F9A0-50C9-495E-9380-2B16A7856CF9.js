function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(); } catch (e) {}
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v15 = new F9();
        const v16 = v15.constructor;
        new v16(v15, a7);
        const v18 = new v16();
        return v18;
    }
    f5(v4, F0, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F0(F0);
const v21 = v20.constructor;
new v21(v21);
