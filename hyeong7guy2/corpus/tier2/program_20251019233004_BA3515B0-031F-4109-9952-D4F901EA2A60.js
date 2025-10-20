const v5 = Symbol.iterator;
const v17 = {
    [v5]() {
        with (d8) {
            const v9 = test.FastCAPI;
            const v10 = new v9(this, 28663n, Int16Array, test, v9);
            const v11 = v10.sum_uint64_as_number;
            try { v11.call(28663n); } catch (e) {}
        }
        const v16 = {
            next() {
                return { done: 10000 };
            },
        };
        return v16;
    },
};
const v19 = new Int16Array(Date, -128, -128);
function f20() {
    new Date(WeakSet, Date, -128, ...v19, ...v17);
    return v19;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
