function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
class C4 extends F0 {
}
function f5(a6, a7) {
    try {
        new C4();
    } catch(e9) {
    }
    C4.__proto__ = v3;
    return a6;
}
f5();
%PrepareFunctionForOptimization(f5);
%OptimizeMaglevOnNextCall(f5);
f5();
