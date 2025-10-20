function f0(a1, a2) {
    const v3 = a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = [a2,a2,a2];
        function f10(a11) {
            const t6 = v9.constructor;
            const v13 = t6(f10, f10);
            try { v13.forEach(-2.2250738585072014e-308); } catch (e) {}
            return a1;
        }
        f10();
    }
    const v16 = new F4(v3, f0);
    return v16.constructor;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
