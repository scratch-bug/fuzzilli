const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        const v8 = {
            next() {
                return { done: 10 };
            },
        };
        const v10 = new Map();
        v10.forEach(Map);
        return v8;
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
