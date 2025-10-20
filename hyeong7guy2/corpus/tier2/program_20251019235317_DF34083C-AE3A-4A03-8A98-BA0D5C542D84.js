function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = Symbol.iterator;
            const v23 = {
                [v10]() {
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v18 = -65537n instanceof F14;
                    v18 && v18;
                    const v22 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v22;
                },
            };
            const v26 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v26, ...v23);
            return a7;
        }
        f6();
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
