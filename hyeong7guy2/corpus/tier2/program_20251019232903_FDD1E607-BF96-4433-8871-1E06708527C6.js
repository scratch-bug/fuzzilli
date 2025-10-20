const v0 = %WasmArray();
const v4 = Symbol.iterator;
const v9 = {
    [v4]() {
        const v8 = {
            next() {
                return { done: v0 };
            },
        };
        return v8;
    },
};
function f11() {
    new Date(WeakSet, Date, 882, ...v9, ...v9);
    return v9;
}
f11.call(f11());
%OptimizeFunctionOnNextCall(f11);
f11();
