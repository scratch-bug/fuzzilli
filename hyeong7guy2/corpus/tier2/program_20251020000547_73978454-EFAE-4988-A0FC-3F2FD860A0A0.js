const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const t0 = globalThis.encodeURI;
        t0(globalThis, globalThis, Date);
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array();
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v17;
}
f16();
f16();
%OptimizeFunctionOnNextCall(f16);
f16();
