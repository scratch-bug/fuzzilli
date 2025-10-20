const v4 = Symbol.iterator;
const v17 = {
    [v4]() {
        function f7(a8, a9, a10) {
            return a8.apply();
        }
        new Promise(f7);
        const v16 = {
            next() {
                return { done: 10 };
            },
        };
        return v16;
    },
};
const v19 = new Int16Array();
function f20() {
    new Date(WeakSet, Date, 882, ...v19, ...v17);
    return v17;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
