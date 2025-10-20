const v5 = Symbol.iterator;
const v16 = {
    [v5]() {
        with (d8) {
            const v9 = test.FastCAPI;
            const v10 = new v9(test, test, WeakSet, d8, v9);
            try { v10.test_wasm_memory(true); } catch (e) {}
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
    const v20 = new Date(WeakSet, Date, -128, ...v18, ...v16);
    return v20;
}
f19();
f19();
%OptimizeFunctionOnNextCall(f19);
f19();
