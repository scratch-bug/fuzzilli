function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a2;
    this.e = a2;
}
function f5(a6, a7, a8) {
    new F0(BigInt(15));
    return 15;
}
f5(f5, F0, F0);
%PrepareFunctionForOptimization(f5);
%OptimizeFunctionOnNextCall(f5);
f5();
