const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v13 = {
            next() {
                with (d8) {
                    const v9 = test.FastCAPI;
                    const v10 = new v9(this, this, WeakSet, test);
                    v10.clamp_compare_u64(d8, d8, v9);
                }
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
