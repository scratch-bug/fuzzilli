const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v10 = {
            type: v6,
            next() {
                this.type;
                return { done: 10 };
            },
        };
        return v10;
    },
};
function f13() {
    const v14 = new Date(WeakSet, Date, 882, ...v11, ...v11);
    return v14;
}
f13();
%PrepareFunctionForOptimization(f13);
%OptimizeFunctionOnNextCall(f13);
f13();
