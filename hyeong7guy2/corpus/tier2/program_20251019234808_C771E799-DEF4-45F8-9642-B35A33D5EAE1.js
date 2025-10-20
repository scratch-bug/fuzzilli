const v2 = new BigInt64Array(16);
const v5 = new Float64Array(536870912);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            v5[599];
            return v2.length;
        }
        f11();
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v17 = new F6(Float64Array, 536870912);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
