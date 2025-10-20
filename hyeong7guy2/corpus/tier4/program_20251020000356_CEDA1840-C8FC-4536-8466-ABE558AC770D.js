function f0() {
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        a5.prototype;
    }
    const v10 = new F3(Object);
    const t6 = v10.constructor;
    new t6(eval);
    return Object;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
