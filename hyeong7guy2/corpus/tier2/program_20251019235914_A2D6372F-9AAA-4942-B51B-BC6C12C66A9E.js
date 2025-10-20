const v0 = [];
function f2(a3) {
    a3 | a3;
    -a3;
    return f2;
}
const v6 = f2(536870888n);
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v14 = f12[4];
            v0.forEach(v6);
            v14 | 7;
        }
        f12.call(F7, F7, this, a10, f2);
        f12(a10);
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v20 = new F7(f2, F7);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
