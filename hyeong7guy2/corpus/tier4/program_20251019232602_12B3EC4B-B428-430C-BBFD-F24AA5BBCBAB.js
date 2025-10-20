function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        delete this[2147483648];
        function* f9(a10, a11, a12, a13) {
            yield a12;
            return F0;
        }
        f9(a5, F0, a6, a2);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0();
new F0(v17, v17);
new F0();
