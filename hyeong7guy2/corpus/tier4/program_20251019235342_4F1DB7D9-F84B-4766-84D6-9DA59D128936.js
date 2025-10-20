const v0 = class {
}
class C1 extends v0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        const v12 = Number.isInteger(Number);
        function f13(a14, a15, a16, a17) {
            return a9;
        }
        return f13(C1, Symbol, v12);
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v20 = new F2(C1, C1);
const t17 = v20.constructor;
new t17();
new F2(v0, v0);
