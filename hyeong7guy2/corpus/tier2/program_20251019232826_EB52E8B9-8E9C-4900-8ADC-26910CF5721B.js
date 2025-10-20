const v1 = Uint16Array.prototype;
const v5 = Symbol.iterator;
const v10 = {
    [v5]() {
        const v9 = {
            next() {
                return { done: v1 };
            },
        };
        return v9;
    },
};
const v13 = new Int16Array(Date, 882, 882);
function f14() {
    const v15 = new Date(WeakSet, Date, 882, ...v13, ...v10);
    return v15;
}
f14();
f14();
%OptimizeFunctionOnNextCall(f14);
f14();
