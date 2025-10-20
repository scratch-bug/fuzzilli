function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
            }
            const v14 = new F9("2147483647", -3612);
            const v15 = v14.e;
            const v16 = {};
            try { v16.p(); } catch (e) {}
            v15 - v15;
            new F9(a6, F0);
        }
        f5(f5);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
