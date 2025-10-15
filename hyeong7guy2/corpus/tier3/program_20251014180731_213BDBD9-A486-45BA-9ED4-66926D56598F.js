function f1(a2) {
    function f4() {
        Symbol.search ^= 536870889;
        return a2;
    }
    try { f4(); } catch (e) {}
    return f1;
}
f1(f1);
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
