class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        return Object.setPrototypeOf(Object, this).defineProperties(a9, v1);
    }
    f6(v1, v1, v1);
    %OptimizeFunctionOnNextCall(f6);
}
const v14 = new F2(F2, C0);
const v15 = new F2(v14, v1);
const t14 = v15.constructor;
new t14();
