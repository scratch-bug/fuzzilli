const v4 = Symbol.iterator;
const v15 = {
    [v4]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v9 = new t1();
            try { v9.test_wasm_memory(this); } catch (e) {}
        }
        const v14 = {
            next() {
                return { done: 10000 };
            },
        };
        return v14;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, -128, ...v17, ...v15);
    return v19;
}
f18();
f18();
%OptimizeFunctionOnNextCall(f18);
f18();
