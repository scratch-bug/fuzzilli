const v4 = Symbol.iterator;
const v14 = {
    [v4]() {
        const v8 = {
            next() {
                return { done: 5 };
            },
        };
        const v10 = new Map();
        const v11 = v10.values();
        const v12 = { __proto__: v11 };
        v11.next();
        return v8;
    },
};
function f16() {
    new Date(WeakSet, Date, 882, ...v14, ...v14);
    return 5;
}
f16.call(Date, v4, f16());
%OptimizeFunctionOnNextCall(f16);
f16();
