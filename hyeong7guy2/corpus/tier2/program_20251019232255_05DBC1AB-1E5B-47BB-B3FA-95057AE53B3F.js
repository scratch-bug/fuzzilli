function f0() {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = F1.constructor;
        v6(f0, F1, f0, v6);
    }
    function f8() {
        with (d8) {
            const t8 = test.FastCAPI;
            const v12 = new t8();
            v12.clamp_compare_i32(d8, test, v12);
        }
        return d8;
    }
    F1.constructor = f8;
    const v14 = new F1(f8, f8, F1);
    return v14;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
