function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10, a11) {
                const v14 = new SharedArrayBuffer(a11, SharedArrayBuffer);
                const v16 = new DataView(v14);
                try { v16.setFloat64(a11, -762615.9332658274, f9); } catch (e) {}
                return DataView;
            }
            f9(F0, f9);
            %PrepareFunctionForOptimization(f9);
            %OptimizeMaglevOnNextCall(f9);
            f9(f9, a2);
            return a3;
        }
        ({ construct: f8 }).construct(F0);
    }
    new F4();
}
new F0(F0, F0);
