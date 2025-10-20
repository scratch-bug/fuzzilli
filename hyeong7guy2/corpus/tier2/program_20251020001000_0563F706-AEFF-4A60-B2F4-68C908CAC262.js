function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        class C10 {
        }
        C10.h = a5;
        C10.h = C10;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v17 = new F0();
            function f18(a19, a20) {
                return a19;
            }
            v17[f18] = f18 !== v17;
        }
        new F11();
        return F0;
    }
    f6(F0, a4, this);
    %OptimizeFunctionOnNextCall(f6);
}
const v24 = new F2();
new F2(F0, v24);
new F2();
