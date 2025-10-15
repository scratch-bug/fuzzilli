class C1 extends BigInt64Array {
}
const v2 = new C1();
function f3() {
    return C1 = v2;
}
const v4 = class {
}
v4.prototype;
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
