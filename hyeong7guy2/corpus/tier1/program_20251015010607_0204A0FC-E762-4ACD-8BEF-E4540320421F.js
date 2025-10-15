function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            f7[4] | 7;
            const v13 = { a: 1.1 };
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F14.d = F0;
            F14.d >>>= 100000;
            return v13.a;
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v22 = new F2();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
