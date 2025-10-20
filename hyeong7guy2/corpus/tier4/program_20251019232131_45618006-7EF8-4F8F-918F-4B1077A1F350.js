function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = class extends C1 {
}
function f3(a4, a5) {
    a5 | a5;
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a10?.at;
        a11 % a11;
    }
    new F8(a5, v2);
    new F8("2147483647");
    return C1;
}
const v16 = f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3(C1, v16);
