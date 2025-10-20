const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v8 = [Array,WeakMap,Array];
        try { v8.reduceRight(BigUint64Array); } catch (e) {}
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19.getMinutes();
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
