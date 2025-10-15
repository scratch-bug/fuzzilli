function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [628894504,-3,-12,9,-35728,-2147483648,-11,129];
            v7[7] = v7;
            v7.at(v7);
            return f5;
        }
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4();
    const t13 = f4.call(F0, this);
    t13();
}
new F0(F0, F0);
