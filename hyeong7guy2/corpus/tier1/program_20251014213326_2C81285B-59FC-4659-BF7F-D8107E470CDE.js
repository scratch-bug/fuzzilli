const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        let v6 = 10;
        const v7 = v6--;
        for (let i = 0; i < 5; i++) {
            Symbol[Temporal] -= v7;
        }
        const v10 = {
            next() {
                return { done: v6 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return 882;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
