function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a3(); } catch (e) {}
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            ("NFC").concat(Uint8Array);
        }
        new F9(F0, F0, a2, F0);
        return f5;
    }
    f5(v4, f5, F0);
    %OptimizeFunctionOnNextCall(f5);
}
const v20 = new F0(F0, F0);
const t16 = v20.constructor;
new t16();
new F0();
