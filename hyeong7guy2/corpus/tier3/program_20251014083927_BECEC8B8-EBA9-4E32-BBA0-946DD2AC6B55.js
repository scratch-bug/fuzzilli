class C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            const v16 = class {
                static [Uint8Array] = a7;
            }
        }
        new F10(a5, F2, a7, C0);
        return F2;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(C0, Uint8Array);
new F2();
new F2(Uint8Array, Uint8Array);
