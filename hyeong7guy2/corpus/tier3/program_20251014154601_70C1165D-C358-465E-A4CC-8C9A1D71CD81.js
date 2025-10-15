const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        Math.fround(v0);
        const v12 = [-28740];
        class C13 {
        }
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            a18.a = a18;
            a17++;
        }
        try { new F14(); } catch (e) {}
        new F14(v12, -1, C13);
        return -1;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v24 = new F1(v0, v0);
const v25 = new F1();
const t23 = v25.constructor;
new t23();
new F1(F1, v24);
