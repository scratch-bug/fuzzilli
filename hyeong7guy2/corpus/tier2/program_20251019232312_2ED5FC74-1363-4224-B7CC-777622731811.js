function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            for (let v12 = 0; v12 < 5; v12++) {
                function F13(a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                let v17 = f4.bind(v11);
                a3 instanceof F13;
            }
        }
        f5();
        f5(this);
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
