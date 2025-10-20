const v4 = Symbol.iterator;
const v15 = {
    [v4]() {
        function f6(a7, a8, a9) {
            return Symbol;
        }
        const v11 = new Promise(f6);
        const v14 = {
            next() {
                return { done: v11 };
            },
        };
        return v14;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v15);
    return v19;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
