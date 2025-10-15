function f2(a3, a4) {
    const t1 = "string";
    t1.__proto__ = Symbol;
    return a4;
}
f2("string", f2);
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
