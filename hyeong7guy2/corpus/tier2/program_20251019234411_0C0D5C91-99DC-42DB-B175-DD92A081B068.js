function f1(a2) {
    a2 < a2;
    return f1;
}
f1(536870888n);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v12 = f10[4];
            v12 | 7;
            const v15 = new f1();
            try { v15.findLast(F5, a11, a8, v12); } catch (e) {}
        }
        f10.call(f9, f10, f9, f10, a8);
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v19 = new F5();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
