const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        const v12 = {
            next() {
                const v7 = { done: "NFD" };
                const v10 = new Uint8ClampedArray(956);
                v10[2] |= undefined;
                return v7;
            },
        };
        return v12;
    },
};
function f15() {
    new Date(WeakSet, Date, 882, ...v13, ...v13);
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeMaglevOnNextCall(f15);
f15();
