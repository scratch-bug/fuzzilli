function f0(a1, a2) {
    function f3(a4) {
        ("p").codePointAt();
        return f3;
    }
    const v7 = f3();
    f3(f0);
    return v7;
}
f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
const v10 = f0();
function f12() {
    return v10;
}
WebAssembly.compileStreaming().catch(f12);
