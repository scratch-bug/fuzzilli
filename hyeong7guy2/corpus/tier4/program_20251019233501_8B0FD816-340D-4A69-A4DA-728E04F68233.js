const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = Math.fround(v0);
        class C11 {
        }
        C11.a = v10;
        return a4;
    }
    f5(v0, v0, v0);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v14 = new F1();
const t16 = v14.constructor;
new t16();
