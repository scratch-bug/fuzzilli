function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new Proxy(F0, {});
function f6() {
    v5[171];
    return F0;
}
f6();
%PrepareFunctionForOptimization(f6);
%OptimizeFunctionOnNextCall(f6);
f6();
