const v3 = Symbol.iterator;
const v10 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v9 = {
            next() {
                return { __proto__: v6, done: 10 };
            },
        };
        return v9;
    },
};
const v13 = new Int16Array(v10, 882);
function f14() {
    new Date(WeakSet, Date, 882, ...v13, ...v10);
    return WeakSet;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
