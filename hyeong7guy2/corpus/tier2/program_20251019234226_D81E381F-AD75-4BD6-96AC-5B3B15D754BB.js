const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                eval();
            }
            const v15 = (-9007199254740990) ** a3;
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const t13 = v0.constructor;
            t13(v15, a7);
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1();
class C23 {
    static [v22](a25, a26, a27) {
    }
    static [v22](a29, a30, a31) {
    }
}
