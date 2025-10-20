const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v5 = new WeakSet();
        v5.delete();
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array(Symbol, 882, 882);
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
