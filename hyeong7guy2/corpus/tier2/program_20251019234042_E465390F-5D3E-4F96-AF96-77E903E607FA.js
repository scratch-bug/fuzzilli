const v0 = {};
for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            const v17 = [a16,a16,a16,a16,a16];
            v0.valueOf = a16;
            a16 !== v17;
            return a16;
        }
        f15();
        f15(a13);
        %OptimizeMaglevOnNextCall(f15);
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f14 });
}
const v21 = new F10();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
