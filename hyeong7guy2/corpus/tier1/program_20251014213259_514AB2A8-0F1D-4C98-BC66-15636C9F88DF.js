const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        Object.setPrototypeOf(Object, Object());
        const v11 = {
            next() {
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v15 = new Int16Array(v12);
function f16() {
    const v17 = new Date(WeakSet, Date, 882, ...v15, ...v12);
    return v17;
}
f16.call();
f16();
%OptimizeFunctionOnNextCall(f16);
f16();
