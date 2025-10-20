function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Array(F10);
    function f16() {
        function f17(a18) {
            -9007199254740990 >> a8;
            new F6(f16, a18, F0);
        }
        f17(F0);
        f17(f16);
        %OptimizeMaglevOnNextCall(f17);
        return f17;
    }
    Object.defineProperty(this, "toString", { get: f16 });
}
const v24 = new F6();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
