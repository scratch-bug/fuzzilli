/\xf0\x9f\x92\xa9/imvgsyd;
function f2() {
    return -1n;
}
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
gc();
gc();
