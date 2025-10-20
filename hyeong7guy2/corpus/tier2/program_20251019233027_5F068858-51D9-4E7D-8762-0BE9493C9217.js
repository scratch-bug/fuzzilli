const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        Float32Array[6] >>>= 10;
        for (let v7 = 0; v7 < 5; v7++) {
            "p" + v7;
        }
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v13, ...v13);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeMaglevOnNextCall(f15);
f15();
