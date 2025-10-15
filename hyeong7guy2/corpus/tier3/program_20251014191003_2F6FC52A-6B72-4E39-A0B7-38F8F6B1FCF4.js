function f0(a1, a2) {
    const v3 = a2 | a2;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10, a11, a12) {
            class C13 {
            }
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { F14.apply(F14, F14); } catch (e) {}
            return f9;
        }
        f9(a2, arguments, f0);
    }
    const v22 = new F5(F5, v3);
    new F5(F5, v22);
    let v25;
    try { v25 = arguments["o"](); } catch (e) {}
    return v25;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
const v27 = f0();
function f29() {
    return WebAssembly;
}
WebAssembly.compileStreaming(WebAssembly, v27).catch(f29);
