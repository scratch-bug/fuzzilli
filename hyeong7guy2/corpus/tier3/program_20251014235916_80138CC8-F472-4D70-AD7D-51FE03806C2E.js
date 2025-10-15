function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function f3(a4, a5) {
    function f6(a7, a8, a9) {
        new C2();
        return f6;
    }
    f6();
    a5 | a5;
    return f6;
}
const v13 = f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3(f3, v13);
