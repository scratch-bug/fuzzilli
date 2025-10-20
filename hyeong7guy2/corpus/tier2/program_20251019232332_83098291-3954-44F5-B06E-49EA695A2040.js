const v1 = class extends Int8Array {
}
const v5 = Symbol.iterator;
const v12 = {
    [v5]() {
        const v10 = {
            next() {
                return { done: 39000 };
            },
        };
        const v11 = Symbol(WeakSet);
        switch (v1) {
            case v11:
                break;
        }
        return v10;
    },
};
function f14() {
    const v15 = new Date(WeakSet, Date, 882, ...v12, ...v12);
    return v15;
}
f14();
f14();
%OptimizeFunctionOnNextCall(f14);
f14();
