const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v7 = Object.setPrototypeOf(Object, Object());
        const v8 = v7.getPrototypeOf(v7);
        const v11 = {
            next() {
                return { done: v8 };
            },
        };
        return v11;
    },
};
function f14() {
    const v15 = new Date(WeakSet, Date, 882, ...v12, ...v12);
    return v15;
}
f14.call();
f14();
%OptimizeFunctionOnNextCall(f14);
f14();
