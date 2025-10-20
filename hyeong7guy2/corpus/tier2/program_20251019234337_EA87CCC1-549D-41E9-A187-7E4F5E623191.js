const v0 = [1e-15];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = [-28740];
        class C11 {
        }
        C11.h = a4;
        C11.h = C11;
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f20(a21, a22, a23, a24) {
                a22[0] += a23;
                return a3;
            }
            try { f20(0, v0, a18); } catch (e) {}
        }
        new F13(v10, -1, C11, -9007199254740992n);
        return v0;
    }
    f5(a4, F1, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v28 = new F1();
const t24 = v28.constructor;
new t24();
new F1();
