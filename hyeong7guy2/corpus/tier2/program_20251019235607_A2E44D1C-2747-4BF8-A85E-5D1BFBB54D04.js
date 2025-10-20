const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v11 = {
            next() {
                2 + "4294967296";
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array(882, 882);
function f16() {
    new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v12;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
