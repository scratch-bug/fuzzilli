function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            Array.isArray([1.0]);
        }
        new F8();
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0(F0, F0);
new F0(F0, v19);
new F0();
