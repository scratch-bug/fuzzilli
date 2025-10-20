function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a13--;
                this.e = a13;
            }
            const v15 = new F10("2147483647", -3612);
            new F10(v15.e, a3);
            return a4;
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
new F1(1);
const v22 = new F1();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
