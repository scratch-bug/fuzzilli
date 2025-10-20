const v2 = new BigInt64Array(16);
const v5 = new Float64Array(536870912);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            const v13 = v5[599];
            v13 << v13;
            v2.length;
        }
        f11(f11());
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v18 = new F6(536870912, v2);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
