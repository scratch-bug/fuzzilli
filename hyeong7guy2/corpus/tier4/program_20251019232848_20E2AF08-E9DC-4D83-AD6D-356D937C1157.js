function f0() {
    const v1 = [693913.4712015034,-314050.5385797281];
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const t4 = v1.constructor;
        const v7 = t4(F2);
        v7[2496] = v7;
    }
    new F2();
    return F2;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
