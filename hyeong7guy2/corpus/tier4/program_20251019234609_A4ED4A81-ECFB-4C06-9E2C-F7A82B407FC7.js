class C1 extends Int16Array {
}
const v2 = new C1();
function f3() {
    v2 instanceof Int16Array;
    return v2;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
