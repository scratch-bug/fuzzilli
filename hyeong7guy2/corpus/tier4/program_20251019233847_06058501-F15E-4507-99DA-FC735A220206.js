function f0() {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = Date.prototype.getDate;
        try { v9.apply(a4, a6, f0, F1, F1); } catch (e) {}
    }
    const v11 = new F1();
    return v11;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
