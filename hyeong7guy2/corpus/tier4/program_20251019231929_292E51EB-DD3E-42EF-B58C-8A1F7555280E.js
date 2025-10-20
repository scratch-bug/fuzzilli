function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    a5 | a5;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        class C11 extends F0 {
        }
        new C11();
    }
    const v13 = new F7(F0, F0);
    return v13;
}
const v14 = f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3(f3, v14);
