function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7() {
            return f6;
        }
        const v9 = Symbol.iterator;
        const v19 = {
            [v9]() {
                const v14 = {
                    next() {
                        return { done: 10 };
                    },
                };
                const v16 = new Map();
                const v17 = v16.values();
                v17.equals = f7;
                v17.equals();
                return v14;
            },
        };
        function f21() {
            const v22 = new Date(WeakSet, Date, 882, ...v19, ...v19);
            return v22;
        }
        f21();
        f21.call();
        %OptimizeFunctionOnNextCall(f21);
        f21();
        function f26(a27) {
            return a4;
        }
        return f26;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v28 = new F2();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
