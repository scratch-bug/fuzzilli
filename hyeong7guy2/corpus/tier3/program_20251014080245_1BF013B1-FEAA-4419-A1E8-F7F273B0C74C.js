function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            /\x60cA\x60/msd;
        }
        new F8();
        return a6;
    }
    f4(F0, a3, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
new F0();
new F0(v17, F0);
