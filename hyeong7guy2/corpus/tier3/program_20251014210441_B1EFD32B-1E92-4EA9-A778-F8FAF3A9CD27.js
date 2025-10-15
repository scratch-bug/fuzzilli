const v0 = class {
}
const v2 = new WeakMap();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.e = v2;
    function f7(a8, a9, a10) {
        let v11;
        try { v11 = a6.e(a10); } catch (e) {}
        return v11;
    }
    f7(a5, WeakMap, v0);
    %OptimizeFunctionOnNextCall(f7);
}
const v13 = new F3(F3, F3);
const v14 = new F3(v0, v13);
new F3(v14, v14);
