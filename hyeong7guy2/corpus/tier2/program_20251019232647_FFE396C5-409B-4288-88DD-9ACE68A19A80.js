function f0(a1, a2) {
    a2 | a2;
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7) {
            const v8 = { ...this };
            try { v8.createExternalizableTwoByteString(F4, a7); } catch (e) {}
            return a2;
        }
        f6(f0);
    }
    const v11 = new F4();
    v11.constructor;
    return F4;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
