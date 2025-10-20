function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12.d >>>= 100000;
            const v18 = new BigUint64Array();
            v18[2];
            v11.a;
        }
        f5(a2);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0(F0, F0);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
