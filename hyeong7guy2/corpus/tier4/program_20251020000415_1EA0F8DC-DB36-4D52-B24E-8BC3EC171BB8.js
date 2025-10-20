class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        let v10;
        try { v10 = String.fromCodePoint(String, C0); } catch (e) {}
        return v10;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v12 = new F1(C0, F1);
new F1(v12, v12);
new F1();
