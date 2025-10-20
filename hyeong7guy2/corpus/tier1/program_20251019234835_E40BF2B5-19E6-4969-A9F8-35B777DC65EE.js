const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v6 = Object();
        const v8 = Object.setPrototypeOf(Object, v6).getPrototypeOf(v6);
        const v11 = {
            next() {
                return { done: v8 };
            },
        };
        return v11;
    },
};
function f14() {
    new Date(WeakSet, Date, 882, ...v12, ...v12);
    return v12;
}
f14.call(Date, f14, v12, Date, Date);
f14();
%OptimizeFunctionOnNextCall(f14);
f14();
