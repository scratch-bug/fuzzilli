function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = [-28740];
        class C10 {
        }
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = a17.constructor;
            try { v18.apply(a7, a15, a2, a7); } catch (e) {}
        }
        new F12(v9, -1, C10, -9007199254740992n);
        return v9;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const t18 = v22.constructor;
new t18();
new F0();
