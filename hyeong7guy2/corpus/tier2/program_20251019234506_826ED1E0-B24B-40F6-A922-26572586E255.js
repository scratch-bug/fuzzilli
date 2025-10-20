function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = [1.0];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a10.e = a10;
    function f12() {
        function f13(a14) {
            return Array.of(v7)[0].push(1);
        }
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    f12();
    a10.g ||= a10;
    Object.defineProperty(this, "toString", { get: f12 });
}
new F8(F1);
const v22 = new F8(v7);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
