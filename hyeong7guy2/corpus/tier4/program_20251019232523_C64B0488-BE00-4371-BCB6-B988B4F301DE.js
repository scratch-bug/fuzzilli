function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            a11 === a11;
        }
        new F8(F8, F0, a2, this);
        return F8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
const v18 = new F0(v17, v17);
new F0(v18, v18);
