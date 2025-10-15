function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                v4++;
            }
            const v17 = new F12();
            const t13 = v17.constructor;
            new t13();
            gc();
            -9007199254740990 >> a7;
            return a11;
        }
        f10();
        f10(f9);
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v26 = new F5();
class C27 {
    static [v26](a29, a30, a31) {
    }
}
