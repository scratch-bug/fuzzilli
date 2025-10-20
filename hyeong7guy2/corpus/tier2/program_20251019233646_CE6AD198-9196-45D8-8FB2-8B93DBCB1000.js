const v5 = Symbol.iterator;
const v11 = {
    [v5]() {
        const v10 = {
            next() {
                const v8 = { done: "NFD" };
                v8.done;
                v8[Symbol] = 3;
                return v8;
            },
        };
        return v10;
    },
};
function f13() {
    new Date(WeakSet, Date, 882, ...v11, ...v11);
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeMaglevOnNextCall(f13);
f13();
