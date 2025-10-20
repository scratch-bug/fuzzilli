class C3 {
    static p(a5) {
    }
}
function f6() {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            ("valueOf").startsWith("valueOf", -65536);
            F14.constructor = f6;
        }
        f12();
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v22 = new F7();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
