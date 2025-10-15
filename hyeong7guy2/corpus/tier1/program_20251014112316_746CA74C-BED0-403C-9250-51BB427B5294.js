function* f1(a2, a3, a4) {
    return a2;
}
const v5 = f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1(f1, 115, v5);
f1.prototype = 115;
