const v5 = Symbol.iterator;
const v13 = {
    [v5]() {
        Float32Array[6] >>>= 10;
        const v11 = {
            next() {
                const v9 = { done: "NFD" };
                v9 - v9;
                return v9;
            },
        };
        v11.next();
        return v11;
    },
};
function f15() {
    new Date(WeakSet, Date, 882, ...v13, ...v13);
    return 882;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeMaglevOnNextCall(f15);
f15();
