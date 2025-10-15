function f1(a2, a3) {
    function f4(a5) {
        return a5;
    }
    a3 | a3;
    arguments[Symbol.toStringTag] = f4;
    return arguments;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
