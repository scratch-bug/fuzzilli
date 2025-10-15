function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v9;
        try { v9 = new Uint32Array(); } catch (e) {}
        v9[2] = v9;
        return f4;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
const t12 = v11.constructor;
new t12();
new F0();
