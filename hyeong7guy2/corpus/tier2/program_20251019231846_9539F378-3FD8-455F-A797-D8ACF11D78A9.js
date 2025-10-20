const v0 = /mxyz{0,1}/duy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        class C9 {
        }
        C9.h = a4;
        C9.h = C9;
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            let v16 = 0;
            do {
                function f17(a18, a19) {
                    v0[5] = a12;
                    return f17;
                }
                try { f17(f17, v0); } catch (e) {}
                v16++;
            } while (v16 < 6)
        }
        new F10(F10, v0, v0, v0);
    }
    f5(this, a3, this);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v27 = new F1();
new F1(F1, v27);
