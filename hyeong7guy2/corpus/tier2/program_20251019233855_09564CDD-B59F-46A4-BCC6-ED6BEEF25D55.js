const v0 = [];
function f1(a2) {
    a2 === a2;
    return f1;
}
const v4 = f1();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v12 = f10[4];
            v0.forEach(v4);
            v12 | 7;
            return v12;
        }
        f10.call(f1, f1, f10, a8);
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v18 = new F5();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
