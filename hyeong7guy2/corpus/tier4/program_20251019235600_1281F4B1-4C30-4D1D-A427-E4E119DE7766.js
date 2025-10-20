function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v8 = ([628894504,-3,-12,9,-35728,-2147483648,-11,129]).at();
            v8--;
            const v10 = v8 * v8;
            return v10 * v10;
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    const t12 = f4.call(this);
    t12();
}
new F0(F0, F0);
new F0();
