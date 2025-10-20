function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a12;
            }
            const v13 = new F9("2147483647", -3612);
            const v14 = v13.e;
            v14 - v14;
            const v16 = {};
            try { v16.p(f5, F9, v16); } catch (e) {}
            v14 - v14;
            return "2147483647";
        }
        f5(a3);
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0(F0, F0);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
