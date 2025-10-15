class C1 extends Set {
}
const v2 = new C1();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        v2.size;
        return a6;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v13 = new F3(C1, v2);
new F3(F3, v13);
new F3();
