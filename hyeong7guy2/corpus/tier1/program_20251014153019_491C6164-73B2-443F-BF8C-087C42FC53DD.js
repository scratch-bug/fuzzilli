function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        try { a6.apply(a4, a4); } catch (e) {}
        const v12 = Number.isNaN(1000000.0);
        const v13 = [-28740];
        class C14 {
        }
        C14.h = C14;
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            const v22 = a21.constructor;
            try { v22.asIntN(v12, a7); } catch (e) {}
        }
        new F16(v13, -1, C14, -9007199254740992n);
        return this;
    }
    f5(f5, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v26 = new F1(1000000.0, 1000000.0);
const t21 = v26.constructor;
new t21(1000000.0);
new F1();
new F1(F1, 1000000.0);
