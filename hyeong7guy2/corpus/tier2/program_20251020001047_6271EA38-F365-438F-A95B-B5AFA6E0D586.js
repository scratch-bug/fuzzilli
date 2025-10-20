function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = [-28740];
        class C10 {
        }
        C10.h = a3;
        C10.h = C10;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = a17 / a17;
            v18 >> v18;
        }
        const v20 = new F12(v9, -1, C10, -9007199254740992n);
        const t14 = v20.constructor;
        new t14();
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v25 = new F0(F0, F0);
const t23 = v25.constructor;
new t23();
