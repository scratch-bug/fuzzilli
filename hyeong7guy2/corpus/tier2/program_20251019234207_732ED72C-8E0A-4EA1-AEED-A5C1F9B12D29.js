const v5 = Symbol.iterator;
const v16 = {
    [v5]() {
        Float32Array[6] >>>= 10;
        const v14 = {
            next() {
                const v9 = { done: "NFD" };
                const v12 = new Uint8ClampedArray(956);
                v12[10] /= undefined;
                return v9;
            },
        };
        v14.next();
        return v14;
    },
};
function f18() {
    new Date(WeakSet, Date, 882, ...v16, ...v16);
    return Date;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeMaglevOnNextCall(f18);
f18();
