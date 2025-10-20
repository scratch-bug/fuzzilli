const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        const v8 = Object.groupBy("bigUint", Object);
        v8[0] = v8;
        const v12 = {
            next() {
                return { done: 10000 };
            },
        };
        return v12;
    },
};
const v15 = new Int16Array(Symbol, -128, -128);
function f16() {
    const v17 = new Date(WeakSet, Date, -128, ...v15, ...v13);
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
