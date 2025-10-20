for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            function f16(a17, a18, a19) {
                const v23 = BigInt.asUintN(43036, -229684853n);
                return v23 < v23;
            }
            %OptimizeFunctionOnNextCall(f16);
            return f16(this, a12, a11);
        }
        f14(this);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v27 = new F9(F9, F9);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
