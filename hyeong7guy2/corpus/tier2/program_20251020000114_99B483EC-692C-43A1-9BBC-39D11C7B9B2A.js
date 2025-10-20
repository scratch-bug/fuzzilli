function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v23 = {
                [v10]() {
                    const v17 = new Int16Array(Symbol[4] | 7);
                    const v18 = v17.length;
                    v18 - v18;
                    const v22 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v22;
                },
            };
            const v26 = new Int16Array(a7, a7, a4);
            new Date(WeakSet, Date, 882, ...v26, ...v23);
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v30 = new F1();
class C31 {
    static [v30](a33, a34, a35) {
    }
}
