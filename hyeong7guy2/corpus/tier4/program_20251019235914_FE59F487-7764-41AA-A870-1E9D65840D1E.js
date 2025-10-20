function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8, a9, a10) {
            function F11(a13, a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                eval(a15);
            }
            for (let v19 = 0; v19 < 5; v19++) {
            }
            return F3;
        }
        f7();
    }
    new F3();
    return f0;
}
f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(f0, f0);
