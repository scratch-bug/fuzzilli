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
            a17 * a17;
        }
        const v19 = new F12(v9, -1, C10, -9007199254740992n);
        const t13 = v19.constructor;
        new t13(C10);
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0();
const v24 = v23.constructor;
new v24(v23, F0, F0, v24, v23);
new F0();
