const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v9 = {
            next() {
                return { __proto__: v6, done: 10 };
            },
        };
        const v10 = v9.next();
        v10.a = v10;
        return v9;
    },
};
function f13() {
    const v14 = new Date(WeakSet, Date, 882, ...v11, ...v11);
    return v14;
}
f13();
f13();
%OptimizeFunctionOnNextCall(f13);
f13();
