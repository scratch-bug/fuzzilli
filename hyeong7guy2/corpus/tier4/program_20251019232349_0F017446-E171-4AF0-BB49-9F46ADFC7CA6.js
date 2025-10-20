class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C10 extends Uint32Array {
        }
        const v12 = [null,C10];
        try { v12.filter(C0); } catch (e) {}
        return C0;
    }
    f5(C0, a4, F1);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v16 = new F1();
const v17 = v16.constructor;
new v17(v17, C0);
