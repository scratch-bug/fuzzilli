const v3 = Symbol.iterator;
const v14 = {
    [v3]() {
        const v13 = {
            next() {
                const v7 = { done: 10 };
                const v9 = Math.acosh(10);
                gc(this);
                v9 >>> v9;
                return v7;
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v17, ...v14);
    return v19;
}
f18();
%PrepareFunctionForOptimization(f18);
%OptimizeFunctionOnNextCall(f18);
f18();
