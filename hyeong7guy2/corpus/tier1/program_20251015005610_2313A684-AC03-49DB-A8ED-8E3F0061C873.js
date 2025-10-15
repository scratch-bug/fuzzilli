const v1 = [,];
function f2(a3, a4) {
    for (const v5 in v1) {
    }
    return f2;
}
v1.constructor = f2;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v14 = -9007199254740990 >> a8;
            const t12 = v1.constructor;
            t12(v14, F6, F6);
        }
        f11();
        f11(f2);
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v19 = new F6(undefined, F6);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
