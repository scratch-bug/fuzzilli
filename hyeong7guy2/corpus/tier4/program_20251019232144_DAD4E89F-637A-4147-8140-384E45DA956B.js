function f0(a1, a2) {
    const v3 = a1.name;
    const v4 = v3 == v3;
    return v3.indexOf(v4, f0, v4, v4);
}
f0(f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0);
