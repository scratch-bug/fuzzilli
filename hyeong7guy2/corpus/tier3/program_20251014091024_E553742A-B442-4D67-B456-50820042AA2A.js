class C1 extends Set {
}
const v2 = new C1();
function f3() {
    return v2;
}
%PrepareFunctionForOptimization(f3);
%OptimizeFunctionOnNextCall(f3);
f3();
