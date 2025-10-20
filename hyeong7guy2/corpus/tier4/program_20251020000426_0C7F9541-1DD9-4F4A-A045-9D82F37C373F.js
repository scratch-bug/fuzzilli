function f0(a1, a2, a3) {
    let v5 = -229684853n;
    -(v5++);
    BigInt.asUintN(15, v5);
    function f11() {
        return v5;
    }
    WebAssembly.compileStreaming().catch(f11);
    return f0;
}
f0(f0, f0, f0);
%PrepareFunctionForOptimization(f0);
for (let i17 = 0, i18 = 10; i18; i18--) {
}
%OptimizeFunctionOnNextCall(f0);
f0();
