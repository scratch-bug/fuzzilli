const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v10 = {
            next() {
                const v8 = { __proto__: v6, done: 10 };
                v8[0];
                return v8;
            },
        };
        return v10;
    },
};
function f13() {
    new Date(WeakSet, Date, 882, ...v11, ...v11);
    return Date;
}
f13();
f13();
%OptimizeFunctionOnNextCall(f13);
f13();
