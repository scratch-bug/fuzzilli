function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Symbol.iterator;
const v15 = {
    [v7]() {
        const v14 = {
            next() {
                const v10 = { done: F1 };
                const v13 = new Uint8ClampedArray(956);
                v13[508] = v13;
                return v10;
            },
        };
        return v14;
    },
};
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v15, ...v15);
    return v18;
}
f17();
f17();
%OptimizeMaglevOnNextCall(f17);
f17();
