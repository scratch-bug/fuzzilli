function f0(a1, a2) {
    let v3 = a2 | a2;
    function f4(a5, a6, a7) {
        return v3 = a5;
    }
    new f4(v3);
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
