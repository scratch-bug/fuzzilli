function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = f5[4] | 7;
            const v11 = Symbol.iterator;
            for (let i13 = 0;
                (() => {
                    const v15 = i13 < 20000;
                    v11 == v11;
                    return v15;
                })();
                ++i13) {
            }
            v10 - v10;
        }
        f5(f5);
        f5();
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
