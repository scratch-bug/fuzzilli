async function* f0(a1, a2, a3) {
    return a1;
}
const v4 = f0();
const v8 = Symbol.iterator;
const v13 = {
    [v8]() {
        const v12 = {
            next() {
                return { done: v4 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(v13);
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
