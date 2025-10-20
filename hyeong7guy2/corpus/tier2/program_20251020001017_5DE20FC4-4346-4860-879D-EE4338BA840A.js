function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = { a: 1.1 };
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F12["16" + F12];
            let v19 = f4.bind(v11);
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
