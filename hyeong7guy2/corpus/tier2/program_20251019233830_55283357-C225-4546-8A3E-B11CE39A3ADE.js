function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                a12--;
                this.e = a12;
                this[f5] |= a11;
                try { a6(a11, this, a3, this, a3); } catch (e) {}
            }
            const v15 = new F9("2147483647", -3612);
            v15.e;
            new F9(v15, a6);
        }
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0(F0, F0);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
