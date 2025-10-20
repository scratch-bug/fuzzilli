const v1 = new Float32Array();
const v2 = v1.entries();
const v6 = Symbol.iterator;
const v11 = {
    [v6]() {
        const v10 = {
            next() {
                return { done: v2 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return Symbol;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
