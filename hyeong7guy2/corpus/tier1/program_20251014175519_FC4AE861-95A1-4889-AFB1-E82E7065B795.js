const v2 = new Float32Array(Symbol, Float32Array, Symbol);
v2.subarray();
const v6 = Symbol.iterator;
const v12 = {
    [v6]() {
        v2[6] >>>= 10;
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array(v2, 882, 882);
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v17;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
