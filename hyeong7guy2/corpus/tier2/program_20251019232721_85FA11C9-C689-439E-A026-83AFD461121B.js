const v1 = new Map();
const v5 = Symbol.iterator;
const v12 = {
    [v5]() {
        const v11 = {
            next() {
                const v9 = { done: 10 };
                v1.has(10);
                return v9;
            },
        };
        return v11;
    },
};
function f14() {
    const v15 = new Date(WeakSet, Date, 882, ...v1, ...v12);
    return v15;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
