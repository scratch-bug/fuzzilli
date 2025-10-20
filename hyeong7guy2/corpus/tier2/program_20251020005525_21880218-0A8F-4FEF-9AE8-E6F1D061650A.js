let v1 = 1676310533;
const v3 = Symbol.iterator;
const v10 = {
    [v3]() {
        const v5 = v1--;
        v5 != v5;
        const v9 = {
            next() {
                return { done: v1 };
            },
        };
        return v9;
    },
};
const v13 = new Int16Array();
function f14() {
    const v15 = new Date(Symbol, Date, 882, ...v13, ...v10);
    return v15;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
