const v6 = Symbol.iterator;
const v14 = {
    [v6]() {
        Float32Array[6] >>>= 10;
        const v12 = {
            next() {
                const v10 = { done: "NFD" };
                for (const v11 in "o") {
                }
                return v10;
            },
        };
        v12.next();
        return v12;
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
