const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v10 = {
            next() {
                return this;
            },
            [v3]: Object,
            __proto__: Date,
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
function f13() {
    const v14 = new Date(WeakSet, Date, 882, ...v11, ...v11);
    return v14;
}
f13.call();
f13();
%OptimizeFunctionOnNextCall(f13);
f13();
