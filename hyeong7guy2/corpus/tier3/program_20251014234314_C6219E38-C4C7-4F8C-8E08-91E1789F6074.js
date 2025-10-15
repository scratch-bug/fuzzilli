function f0(a1, a2) {
    a2 | a2;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        a7.charAt(a2);
    }
    new F5("2147483647");
    return a2;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
