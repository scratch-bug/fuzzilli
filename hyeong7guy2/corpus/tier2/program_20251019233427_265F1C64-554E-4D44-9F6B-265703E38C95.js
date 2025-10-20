let v0 = 1676310533;
const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        v0--;
        const v10 = {
            next() {
                const v8 = { done: true };
                return { done: v0 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    const v16 = new Date(Symbol, Date, 882, ...v14, ...v11);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
