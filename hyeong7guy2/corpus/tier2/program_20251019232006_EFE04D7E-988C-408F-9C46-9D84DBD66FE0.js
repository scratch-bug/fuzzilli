const v2 = new Map();
const v3 = v2.keys();
const v6 = Symbol.iterator;
const v11 = {
    [v6]() {
        const v10 = {
            next() {
                return { done: v3 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
