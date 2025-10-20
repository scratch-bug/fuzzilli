const v1 = class {
}
const v5 = Symbol.iterator;
const v16 = {
    [v5]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v10 = new t1();
            v10.fast_attribute;
            for (const v12 in Date) {
            }
        }
        const v15 = {
            next() {
                return { done: v1 };
            },
        };
        return v15;
    },
};
function f18() {
    const v19 = new Date(WeakSet, Date, -128, ..."function", ...v16);
    return v19;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
