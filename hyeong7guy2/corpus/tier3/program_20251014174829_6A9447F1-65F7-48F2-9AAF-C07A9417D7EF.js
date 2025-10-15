const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C10 {
        }
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v17 = new F11();
        try { v17.constructor(a3, F1, C10, F1, -1, a7, v17, v0); } catch (e) {}
        return a3;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F1(F1, F1);
new F1(v20, F1);
new F1();
