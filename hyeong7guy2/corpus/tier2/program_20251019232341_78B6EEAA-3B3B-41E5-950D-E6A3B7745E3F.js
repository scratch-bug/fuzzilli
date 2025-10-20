const v4 = Symbol.iterator;
const v16 = {
    [v4]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v9 = new t1();
            const v10 = v9.sum_uint64_as_number;
            try { v10(); } catch (e) {}
        }
        const v15 = {
            next() {
                return { done: 10000 };
            },
        };
        return v15;
    },
};
const v18 = new Int16Array();
function f19() {
    new Date(WeakSet, Date, -128, ...v18, ...v16);
    return f19;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
