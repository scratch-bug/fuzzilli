let v1 = 1676310533;
const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        10 + true;
        v1--;
        const v11 = {
            next() {
                return { done: v1 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    const v17 = new Date(Symbol, Date, 882, ...v15, ...v12);
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
