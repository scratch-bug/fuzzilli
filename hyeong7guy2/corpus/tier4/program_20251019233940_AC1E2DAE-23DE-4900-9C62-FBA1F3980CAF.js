function f0(a1, a2) {
    const v6 = new Int32Array(512);
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12) {
            v6[7];
            return a2;
        }
        f11(7);
        f11(f0);
        %OptimizeMaglevOnNextCall(f11);
        f11(512);
    }
    new F7(v6, Int32Array);
    return 512;
}
f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
