function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v15 = {
                [v10]() {
                    const v14 = {
                        next() {
                            const v13 = {};
                            v13.done = v13;
                            return v13;
                        },
                    };
                    return v14;
                },
            };
            const v18 = new Int16Array(Symbol, a3);
            new Date(WeakSet, Date, 882, ...v18, ...v15);
        }
        f6(a3);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
