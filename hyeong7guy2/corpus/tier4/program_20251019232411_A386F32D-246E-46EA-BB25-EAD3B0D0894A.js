class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = Math.sqrt(C0);
        class C11 {
        }
        const v12 = class {
            static [C11](a14, a15) {
            }
        }
        for (let i18 = 0, i19 = 10; i19; i19--) {
        }
        v10 | v10;
        return f5;
    }
    f5(F1, C0, C0);
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F1();
const v28 = new F1(F1, v27);
new F1(v28, C0);
