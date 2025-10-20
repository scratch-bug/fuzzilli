function f3() {
    return WeakSet;
}
const v5 = Symbol.iterator;
const v18 = {
    [v5]() {
        function f8(a9, a10, a11) {
            return Symbol;
        }
        const v13 = new Promise(f8);
        v13.constructor = f3;
        v13.constructor(Promise, v13, v13, 10000);
        const v17 = {
            next() {
                return { done: 10000 };
            },
        };
        return v17;
    },
};
const v20 = new Int16Array();
function f21() {
    const v22 = new Date(WeakSet, Date, -128, ...v20, ...v18);
    return v22;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
