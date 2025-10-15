function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return f5;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v7 = new F0(F0, F0);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            f13[4] | 7;
            const v19 = { a: 1.1 };
            v7.toString(f13, v7, f13);
            v19.a;
        }
        f13();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v24 = new F8();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
