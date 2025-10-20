function f0(a1, a2) {
    const v3 = a2 | a2;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = [F4,F4,F4,F4];
        function f10(a11) {
            const t6 = v9.constructor;
            const v13 = t6(f10, f10);
            let v14;
            try { v14 = v13.forEach(-2.2250738585072014e-308); } catch (e) {}
            return v14;
        }
        f10(a7);
    }
    const v16 = new F4();
    v16.constructor;
    return v3;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(f0, f0);
