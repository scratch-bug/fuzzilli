const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v6 = %WasmStruct();
        const v12 = {
            next() {
                const v8 = { __proto__: v6, done: 10 };
                function f9(a10) {
                    Object.defineProperty(v8, Object, { configurable: true, get: Symbol, set: Object });
                    return Date;
                }
                Object.defineProperty(v8, "a", { enumerable: true, set: f9 });
                return v8;
            },
        };
        const v13 = v12.next();
        v13.a = v13;
        return v12;
    },
};
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v14, ...v14);
    return v17;
}
f16();
f16();
%OptimizeFunctionOnNextCall(f16);
f16();
