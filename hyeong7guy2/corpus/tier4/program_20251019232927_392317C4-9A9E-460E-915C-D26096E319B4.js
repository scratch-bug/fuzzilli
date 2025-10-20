function f0() {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8, a9, a10, a11) {
            this.e = a11;
        }
        new Promise(f7);
    }
    const v14 = new F1();
    return v14;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
