async function* f0(a1, a2, a3, a4) {
    return f0;
}
const v5 = f0(f0, f0, f0, f0);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            a18.apply();
        }
        const v21 = new F14(a11, a13, F6);
        return v21;
    }
    try { f10(v5); } catch (e) {}
    %OptimizeFunctionOnNextCall(f10);
}
const v23 = new F6(f0, f0);
const v24 = new F6(v5, v23);
const v25 = v24.constructor;
new v25(v24, v25);
