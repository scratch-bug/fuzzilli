function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i8 = 10, i9 = 10; i9; i9--) {
            }
            const v17 = [Symbol];
            for (let i18 = 0;
                (() => {
                    const t0 = {};
                    t0.c = i18;
                    const t2 = {};
                    t2.g = i18;
                    ++i18;
                    return i18 < 25000;
                })();
                ) {
                v17[i18] = Symbol;
            }
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0();
class C27 {
    static [v26](a29, a30, a31) {
    }
    static [v26](a33, a34, a35) {
    }
}
