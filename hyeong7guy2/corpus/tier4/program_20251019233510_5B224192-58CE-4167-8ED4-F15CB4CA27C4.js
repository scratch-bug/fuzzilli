function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        let v7 = undefined;
        function f8(a9) {
            const v11 = new Uint32Array();
            return !v11.length;
        }
        const v14 = f8();
        %OptimizeMaglevOnNextCall(f8);
        v7 = v14;
    }
    new F3(f0, F3);
    return F3;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
