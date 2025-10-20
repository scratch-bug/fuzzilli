const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v8 = Array().filter(BigUint64Array);
        try { v8.findLast(Array, Date); } catch (e) {}
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array(v14, 882, 882);
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19;
}
f18();
f18();
%OptimizeFunctionOnNextCall(f18);
f18();
