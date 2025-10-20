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
                    a18.d = a18;
                    a18.d = a18;
                    return a3;
                }
                try { f17(f17, v0); } catch (e) {}
                v16++;
            } while (v16 < 6)
        }
        new F10();
        return F10;
    }
    f5.call();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(v0, F1);
const v27 = new F1();
const v28 = v27.constructor;
new v28(v27, v28, F1);
