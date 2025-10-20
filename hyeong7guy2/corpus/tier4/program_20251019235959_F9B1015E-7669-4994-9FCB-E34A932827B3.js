function f0(a1, a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = class extends F3 {
        constructor(a8, a9) {
            super();
            eval();
        }
    }
    new v6();
    a2 >>> a2;
    return F3;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
