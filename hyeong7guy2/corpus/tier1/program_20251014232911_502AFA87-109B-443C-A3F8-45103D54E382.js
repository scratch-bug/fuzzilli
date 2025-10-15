const v3 = Symbol.iterator;
const v17 = {
    [v3]() {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            for (let v7 = 0; v7 < 5; v7++) {
                const v9 = { a: 1 };
            }
            const v11 = { a: 1.1 };
        }
        new F5();
        const v16 = {
            next() {
                return { done: 10 };
            },
        };
        return v16;
    },
};
const v20 = new Int16Array(Symbol);
function f21() {
    const v22 = new Date(WeakSet, Date, 882, ...v20, ...v17);
    return v22;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
