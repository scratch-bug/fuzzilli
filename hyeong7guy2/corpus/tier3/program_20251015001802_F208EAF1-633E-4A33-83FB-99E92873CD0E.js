function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            try {
                function F14(a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F14.e <<= 100000;
            } catch(e19) {
            }
        }
        new F8();
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0(F0, F0);
new F0(F0, v22);
new F0();
