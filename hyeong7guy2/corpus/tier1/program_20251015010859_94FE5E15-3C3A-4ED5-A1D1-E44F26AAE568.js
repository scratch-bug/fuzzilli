const v0 = [-65535];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = F8 - F8;
            v12 & v12;
            function f15(a16, a17) {
                v0 - a16;
                return a3;
            }
            f15(0);
        }
        f6(f6(f5));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1(v0, v0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
