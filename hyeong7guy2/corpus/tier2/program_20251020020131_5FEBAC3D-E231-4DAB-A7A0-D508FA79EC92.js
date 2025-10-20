class C0 {
}
61798 ^ Uint16Array;
new Uint16Array();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F12();
            function f19() {
            }
            f19();
            function f21(a22, a23, a24) {
                function f26(a27, a28, a29, a30) {
                }
                f26(C0, a22, 0, f19);
                function f33() {
                }
                class C34 extends f33 {
                }
                return f21;
            }
            const t25 = f21();
            t25(f19);
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v39 = new F5();
class C40 {
    static [v39](a42, a43, a44) {
    }
}
