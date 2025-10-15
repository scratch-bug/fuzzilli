function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const t5 = Array();
            t5[104] = 114.28460175642499;
            function f18() {
                return WebAssembly;
            }
            WebAssembly.instantiateStreaming(WebAssembly).catch(f18);
        }
        new F9();
        return a7;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(114.28460175642499, F1);
new F1(F1, 114.28460175642499);
new F1();
