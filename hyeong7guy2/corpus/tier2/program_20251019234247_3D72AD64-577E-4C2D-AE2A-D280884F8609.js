const v4 = Symbol.iterator;
const v17 = {
    [v4]() {
        function f7(a8, a9, a10) {
            f7.caller;
            return Symbol;
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
    const v21 = new Date(WeakSet, Date, 882, ...v19, ...v17);
    return v21;
}
f20();
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
