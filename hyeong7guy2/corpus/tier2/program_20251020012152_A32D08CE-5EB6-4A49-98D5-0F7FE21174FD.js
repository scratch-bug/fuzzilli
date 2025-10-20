const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        const v13 = {
            next() {
                const v8 = { done: "NFD" };
                const v11 = new Uint8ClampedArray(956);
                v11[2] |= undefined;
                return v8;
            },
        };
        return v13;
    },
};
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v14, ...v14);
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeMaglevOnNextCall(f16);
f16();
