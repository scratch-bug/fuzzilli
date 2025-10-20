const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v9 = {
            next() {
                this[2] = v6;
                Date[6] <<= 10;
                this[2] &&= 10;
                return { __proto__: v6, done: 10 };
            },
        };
        v9.next();
        super.g |= 10;
        eval("");
        return v9;
    },
};
function f16() {
    new Date(WeakSet, Date, 882, ...v14, ...v14);
    return WeakSet;
}
f16();
f16();
%OptimizeFunctionOnNextCall(f16);
f16();
