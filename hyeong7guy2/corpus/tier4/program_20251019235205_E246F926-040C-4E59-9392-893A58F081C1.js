function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = ([628894504,-3,-12,9,-35728,-2147483648,-11,129]).at(a6);
            (v8 * v8) != a2;
            return f5;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return F0;
    }
    f4.call();
    f4.call(a3, f4, f4);
}
new F0();
new F0();
