const v5 = Symbol.iterator;
const v15 = {
    [v5]() {
        Float32Array[6] >>>= 10;
        const v13 = {
            next() {
                const v9 = { done: "NFD" };
                const v12 = new Uint8ClampedArray(956);
                v12[508] = v12;
                return v9;
            },
        };
        v13.next();
        return v13;
    },
};
function f17() {
    new Date(WeakSet, Date, 882, ...v15, ...v15);
    return Symbol;
}
f17();
f17();
%OptimizeMaglevOnNextCall(f17);
f17();
