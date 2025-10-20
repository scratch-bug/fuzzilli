const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        Float32Array[6] >>>= 10;
        const v10 = {
            next() {
                const v8 = { done: 10 };
                `symbol${this}boolean`;
                return v8;
            },
        };
        v10.next();
        return v10;
    },
};
function f14() {
    new Date(WeakSet, Date, 882, ...v12, ...v12);
    return f14;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeMaglevOnNextCall(f14);
f14();
