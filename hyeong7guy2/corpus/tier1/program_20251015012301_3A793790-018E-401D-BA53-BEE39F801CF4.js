const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v15 = f11[4] | 7;
            const v17 = { a: 1.1 };
            try { new Int16Array(...v1, v15, F2, ...a12); } catch (e) {}
            v17.a;
        }
        f11();
        f11(a9);
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v22 = new F6();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
