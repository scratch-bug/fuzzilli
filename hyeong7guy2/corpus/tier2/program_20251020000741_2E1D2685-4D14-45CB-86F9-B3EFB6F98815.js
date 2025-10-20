class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13--;
                this.e = a13;
                this.__proto__ = C0;
            }
            const v15 = new F10("2147483647", -3612);
            v15.e;
            new F10(C0, f5);
        }
        f6(f6(f6));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1(F1, F1);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
