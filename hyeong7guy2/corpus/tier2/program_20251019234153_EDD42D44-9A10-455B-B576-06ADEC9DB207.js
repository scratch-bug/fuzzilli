const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v13 = {
            next() {
                const v7 = { done: 10 };
                const v11 = {
                    next() {
                        eval();
                        return 10;
                    },
                };
                `symbol${this}boolean`;
                return v7;
            },
        };
        return v13;
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
