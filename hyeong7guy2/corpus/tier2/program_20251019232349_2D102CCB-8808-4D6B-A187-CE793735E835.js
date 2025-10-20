const v4 = Symbol.iterator;
const v17 = {
    [v4]() {
        function f6(a7, a8, a9) {
            return a8;
        }
        const v13 = new Worker(f6, { type: "function" });
        const v16 = {
            next() {
                return { done: v13 };
            },
        };
        return v16;
    },
};
const v19 = new Int16Array();
function f20() {
    new Date(WeakSet, Date, -128, ...v19, ...v17);
    return f20;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
