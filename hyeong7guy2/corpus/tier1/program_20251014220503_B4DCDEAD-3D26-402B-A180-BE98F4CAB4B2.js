const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const t0 = {};
        t0[2147483649] = Uint16Array;
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    for (let v16 = 0; v16 < 5; v16++) {
    }
    const v17 = new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v17;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
