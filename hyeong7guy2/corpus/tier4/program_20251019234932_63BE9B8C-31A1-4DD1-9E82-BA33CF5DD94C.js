class C1 {
}
class C2 extends C1 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        for (let i = 0; i < 5; i++) {
            function f11(a12, a13, a14, a15) {
                return a14;
            }
            f11(C2, -0.0, C1);
        }
        return a6;
    }
    f7(F3, C1, this);
    %OptimizeFunctionOnNextCall(f7);
}
const v18 = new F3();
new F3(F3, C1);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    new F3();
}
new F20(C1, v18);
