function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = [-28740];
        class C11 {
        }
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            a16 / a16;
            a16 + a16;
            const v21 = a18.constructor;
            try { v21(a7); } catch (e) {}
        }
        const v23 = new F13(v10, -1, C11, -9007199254740992n);
        const t14 = v23.constructor;
        new t14(a4, a3, -1, -1);
        return 6n;
    }
    f5(a4, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F1(F1, F1);
const t22 = v27.constructor;
new t22(6n);
new F1();
