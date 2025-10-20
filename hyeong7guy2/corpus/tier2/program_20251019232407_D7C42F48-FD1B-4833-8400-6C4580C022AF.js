const v2 = new Float32Array();
const v5 = Symbol.iterator;
const v11 = {
    [v5]() {
        v2.length **= 10;
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array(Date);
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
