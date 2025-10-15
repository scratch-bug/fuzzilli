function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v13 = {
                a: 1.1,
                set e(a12) {
                },
            };
            for (let v14 = 0; v14 < 5; v14++) {
                v13.a;
            }
        }
        f5(F0);
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
