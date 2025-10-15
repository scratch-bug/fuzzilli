function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        -9007199254740992n >= -9007199254740992n;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v16 = new F10();
        try { v16.constructor(); } catch (e) {}
        return a5;
    }
    f4(f4, this, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0();
const v20 = new F0(v19, F0);
new F0(v20, F0);
