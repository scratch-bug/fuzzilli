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
    const v12 = new v6();
    try { v12.constructor(); } catch (e) {}
    a2 >>> a2;
    return a1;
}
const v15 = f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v15, f0);
