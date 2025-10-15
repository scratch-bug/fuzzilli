const v1 = [10,10,10];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this(10, F9);
            }
            const v15 = -9007199254740990 >> a4;
            const v16 = {};
            const t10 = v1.constructor;
            t10(v15, F2);
            return -9007199254740990;
        }
        f7(10);
        f7(f7);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v21 = new F2();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
