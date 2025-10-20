const v4 = Symbol.iterator;
const v18 = {
    [v4]() {
        const v17 = {
            next() {
                const v10 = new Int8Array(551);
                function f11(a12) {
                    f11[4];
                    v10[9];
                    return a12;
                }
                f11(f11);
                return { done: 10 };
            },
        };
        return v17;
    },
};
const v20 = new Int16Array();
function f21() {
    new Date(WeakSet, Date, 882, ...v20, ...v18);
    return v20;
}
f21();
%PrepareFunctionForOptimization(f21);
%OptimizeFunctionOnNextCall(f21);
f21();
