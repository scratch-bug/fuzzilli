function f0(a1, a2) {
    a2 | a2;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        a7.prototype = a7;
        a8--;
        function f10(a11, a12, a13) {
            return f10;
        }
        f10();
    }
    const v15 = new F5(F5);
    const v16 = new F5(F5, v15);
    try { arguments["o"](); } catch (e) {}
    return v16;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
function f22() {
    return f0;
}
WebAssembly.compileStreaming().catch(f22);
