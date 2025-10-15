function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = -9007199254740992n >= -9007199254740992n;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { this(F10, v9); } catch (e) {}
        }
        const v17 = new F10();
        try { v17.constructor(F0, a2, F0); } catch (e) {}
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const v21 = v20.constructor;
new v21(v21, v20, v21, v20, F0);
new F0();
