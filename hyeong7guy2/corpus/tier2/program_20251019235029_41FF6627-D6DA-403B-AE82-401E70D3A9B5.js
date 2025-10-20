function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f15(a16) {
                return a2;
            }
            WebAssembly[Symbol.hasInstance] = f15;
            a13 instanceof WebAssembly;
        }
        new F8(a2, a7, f4, F0);
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
