function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(F0, F0, a2, this); } catch (e) {}
    function f5(a6) {
        const v8 = new Uint32Array();
        const v10 = !v8.length;
        return v10 && v10;
    }
    f5(v4);
    %OptimizeMaglevOnNextCall(f5);
}
const v13 = new F0(F0);
const v14 = v13.constructor;
new v14(v13, v14);
