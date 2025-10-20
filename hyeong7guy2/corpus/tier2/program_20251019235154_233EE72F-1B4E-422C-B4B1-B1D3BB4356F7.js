const v0 = [];
function f1(a2, a3) {
    for (const v4 in v0) {
    }
    return a3;
}
v0.constructor = f1;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v13 = -9007199254740990 >> a7;
            const t12 = v0.constructor;
            t12(v13, F5, F5);
        }
        f10(f10);
        f10(f1);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v18 = new F5();
v18.toString(v18);
class C20 {
    static [v18](a22, a23, a24) {
    }
}
