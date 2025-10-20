const v3 = Symbol.iterator;
const v15 = {
    [v3]() {
        const v7 = Object();
        const v8 = Object.setPrototypeOf(Object, v7);
        const t1 = v7.constructor;
        t1();
        v8.getPrototypeOf(v7);
        const v14 = {
            next() {
                return { done: 10 };
            },
        };
        return v14;
    },
};
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v15, ...v15);
    return v18;
}
f17.call();
f17();
%OptimizeFunctionOnNextCall(f17);
f17();
