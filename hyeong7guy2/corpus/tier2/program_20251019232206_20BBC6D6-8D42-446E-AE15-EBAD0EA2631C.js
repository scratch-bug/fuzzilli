function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        return Symbol;
    }
    class C9 extends f7 {
    }
    function f10() {
        function f11(a12) {
            const v15 = Symbol.iterator;
            const v23 = {
                [v15]() {
                    C9[("o").normalize()] <<= 1000000000.0;
                    const v22 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v22;
                },
            };
            const v25 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v25, ...v23);
        }
        f11(f11());
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v29 = new F1();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
