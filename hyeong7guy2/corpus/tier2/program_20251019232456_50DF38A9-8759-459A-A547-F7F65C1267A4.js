const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        const v6 = new WeakSet();
        v6.add(Uint16Array);
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    new Date(WeakSet, Date, 882, ...v15, ...v12);
    return 882;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
