const v0 = [];
function f1(a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        "p" + v3;
    }
    return f1;
}
const v6 = f1(f1);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v14 = f12[4];
            v0.forEach(v6);
            return v14 | 7;
        }
        f12.call(a10, f12, this);
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v20 = new F7();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
