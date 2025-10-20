function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = a13--;
            v14 === v14;
        }
        new F8();
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0, F0);
new F0(v18, F0);
new F0(v18, F0);
