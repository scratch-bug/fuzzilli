function f1(a2, a3) {
    a3 - a3;
    a3 | a3;
    arguments[1] = arguments;
    return arguments;
}
const v8 = f1(Math, -13);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1(f1, v8);
