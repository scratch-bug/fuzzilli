function f0(a1, a2) {
    a1.name.indexOf(a2);
    for (let v5 = 0; v5 < 5; v5++) {
        v5 >>> v5;
    }
    return a2;
}
f0(f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(f0);
