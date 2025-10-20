const v0 = /Ra(?=bbb|bb)c/dgi;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a4;
            }
            function f16(a17) {
                return f16;
            }
            v0.test("valueOf");
            Object.defineProperty(this, "e", { get: f15, set: f16 });
        }
        try { F9.apply(); } catch (e) {}
        const v21 = new F9();
        const v22 = v21.e;
        try { new v22(); } catch (e) {}
        return F1;
    }
    f5(a4, f5, a4);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, F1);
new F1();
