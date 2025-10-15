const v4 = Symbol.iterator;
const v10 = {
    [v4]() {
        Float32Array[6] >>>= 10;
        const v9 = {
            next() {
                return { done: 10 };
            },
        };
        return v9;
    },
};
const v13 = new Int16Array(882, 882, 882);
function f14() {
    const v15 = new Date(WeakSet, Date, 882, ...v13, ...v10);
    return v15;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeMaglevOnNextCall(f14);
f14();
