function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = Symbol.iterator;
const v17 = {
    [v8]() {
        F2[6] >>>= 10;
        const v16 = {
            next() {
                const v12 = { done: F2, a: -9223372036854775808 };
                const v15 = new Uint8ClampedArray(956);
                v15[508] = v15;
                return v12;
            },
        };
        return v16;
    },
};
function f19() {
    const v20 = new Date(WeakSet, Date, 882, ...v17, ...v17);
    return v20;
}
f19();
f19();
%OptimizeMaglevOnNextCall(f19);
f19();
