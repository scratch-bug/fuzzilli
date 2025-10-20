function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = { a: 1.1 };
            for (let v10 = 0; v10 < 5; v10++) {
                v10 >>> v10;
            }
            const v12 = Symbol.iterator;
            for (let i14 = 0;
                (() => {
                    const v16 = i14 < 20000;
                    v12 == v12;
                    return v16;
                })();
                ++i14) {
            }
            f6 - v9;
        }
        f6.apply();
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1(Symbol, Symbol);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
