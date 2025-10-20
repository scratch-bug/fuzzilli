function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = [1.0];
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a9.e = a9;
    function f11() {
        function f12(a13) {
            const v16 = Array.of(v6)[0];
            v16.pop(a10, v16);
        }
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    f11();
    a9.g ||= a9;
    Object.defineProperty(this, "toString", { get: f11 });
}
new F7(F0);
const v21 = new F7(v6);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
