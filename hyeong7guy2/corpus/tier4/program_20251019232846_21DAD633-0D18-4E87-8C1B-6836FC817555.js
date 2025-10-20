function f0(a1, a2, a3) {
    let v5 = -229684853n;
    v5++;
    const v8 = BigInt.asUintN(15, v5);
    function f10() {
        return v5;
    }
    WebAssembly.compileStreaming(a2, a1).catch(f10);
    return v8;
}
const v13 = f0(f0, f0, f0);
%PrepareFunctionForOptimization(f0);
for (let i16 = 0, i17 = 10; i17; i17--) {
}
%OptimizeFunctionOnNextCall(f0);
f0(v13, f0, v13);
