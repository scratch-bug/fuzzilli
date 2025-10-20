function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
function f2(a3, a4) {
    a4 | a4;
    Symbol instanceof F0;
    try { arguments["o"](); } catch (e) {}
    return F0;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
