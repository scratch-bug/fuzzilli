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
            const v18 = a17.constructor;
            try { v18(a6); } catch (e) {}
        }
        new F12(v9, -1, C10, -9007199254740992n);
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = new F0(F0, v22);
new F0(v22, v23);
