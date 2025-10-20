function f1(a2) {
}
BigInt64Array[Symbol.iterator] = f1;
function f7() {
    try { (0).charAt(..."symbol", ...arguments, ...BigInt64Array); } catch (e) {}
    return f7;
}
%PrepareFunctionForOptimization(f7());
%OptimizeMaglevOnNextCall(f7);
f7();
