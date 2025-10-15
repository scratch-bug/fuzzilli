function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        a5 ?? a5;
        a7 ?? a7;
        const v11 = -9007199254740992n >= -9007199254740992n;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            try { this(F12, v11); } catch (e) {}
        }
        const v19 = new F12(a6, F0, v11, a2);
        try { v19.constructor(F0); } catch (e) {}
        return a3;
    }
    f4(a2, a3, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0(F0, F0);
const v23 = v22.constructor;
new v23();
new F0(v22, v23);
