function* f0(a1, a2) {
    return a2;
}
const v3 = f0(f0, f0);
const v7 = Symbol.iterator;
const v12 = {
    [v7]() {
        const v11 = {
            next() {
                return { done: v3 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    new Date(WeakSet, Date, 882, ...v15, ...v12);
    return Int16Array;
}
f16();
%PrepareFunctionForOptimization(f16);
%OptimizeFunctionOnNextCall(f16);
f16();
