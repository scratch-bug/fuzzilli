function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C14 {
            }
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                function f23() {
                    return this;
                }
                WebAssembly.compileStreaming(this, a20).catch(f23);
            }
            new F16(C14, -0.0);
        }
        new F8();
        return a2;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
