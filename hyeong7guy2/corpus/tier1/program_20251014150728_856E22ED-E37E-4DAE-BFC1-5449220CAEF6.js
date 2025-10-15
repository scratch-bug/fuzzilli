const v3 = Symbol.iterator;
const v15 = {
    [v3]() {
        let v5 = 10;
        v5--;
        const v14 = {
            next() {
                const v8 = { done: v5 };
                const v10 = Math.acosh(v5);
                gc(gc);
                v10 >>> v10;
                return v8;
            },
        };
        return v14;
    },
};
const v18 = new Int16Array();
function f19() {
    const v20 = new Date(WeakSet, Date, 882, ...v18, ...v15);
    return v20;
}
f19();
%PrepareFunctionForOptimization(f19);
%OptimizeFunctionOnNextCall(f19);
f19();
