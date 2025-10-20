function f0(a1, a2) {
    function f3(a4, a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function f10(a11, a12, a13) {
                return f0;
            }
            f10 === a5;
        }
        new F6();
        return a1;
    }
    f3();
    const v18 = arguments[1];
    v18 >> v18;
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
