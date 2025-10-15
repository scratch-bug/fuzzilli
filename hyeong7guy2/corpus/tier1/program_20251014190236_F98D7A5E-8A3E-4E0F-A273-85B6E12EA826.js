function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = f5[4] | 7;
            const v11 = { a: 1.1 };
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.hasOwnProperty(7, v9);
            return this.a - v11;
        }
        f5();
        f5();
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
