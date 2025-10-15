const v1 = [-1196253982,-65537,-33735,-128,2147483647,4096,4294967297,-11,2147483647];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.b ^= 0.603409810623195;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v11 = new F2();
class C12 {
    static [v11](a14, a15, a16) {
    }
}
