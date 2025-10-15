function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function f6(a7) {
            return f6;
        }
        f6(f6);
        gc();
        for (let v11 = 0; v11 < 100; v11++) {
        }
        return this;
    }
    const v12 = f4();
    f4(a2);
    %OptimizeMaglevOnNextCall(f4);
    f4(v12);
}
new F0(F0, F0);
