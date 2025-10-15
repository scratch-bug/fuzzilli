const v4 = Symbol.iterator;
const v9 = {
    [v4]() {
        const v8 = {
            next() {
                return { done: BigUint64Array };
            },
        };
        return v8;
    },
};
const v12 = new Int16Array(Date);
function f13() {
    new Date(WeakSet, Date, 882, ...v12, ...v9);
    return Date;
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeFunctionOnNextCall(f13);
f13();
