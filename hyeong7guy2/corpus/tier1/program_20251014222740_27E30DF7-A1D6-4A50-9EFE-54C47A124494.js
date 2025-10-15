function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v11 = Symbol.iterator;
        const v17 = {
            [v11]() {
                const v16 = {
                    next() {
                        return { done: 10 };
                    },
                };
                return v16;
            },
        };
        const v20 = new Int16Array();
        function f21() {
            const v22 = new Date(WeakSet, Date, 882, ...v20, ...v17);
            return v22;
        }
        f21();
        f21();
        return Symbol;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v26 = new F0();
new F0();
new F0(v26, F0);
