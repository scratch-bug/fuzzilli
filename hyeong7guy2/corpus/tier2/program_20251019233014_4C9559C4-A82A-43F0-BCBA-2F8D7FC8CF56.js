const v4 = Symbol.iterator;
const v22 = {
    [v4]() {
        for (let i8 = 10, i9 = 10;
            (() => {
                i8--;
                const v11 = i8 < i9;
                v11 || v11;
                return v11;
            })();
            i9--, i8++) {
            for (let i = 0; i < 5; i++) {
            }
        }
        const v21 = {
            next() {
                return { done: 10 };
            },
        };
        return v21;
    },
};
const v24 = new Int16Array(v22);
function f25() {
    const v26 = new Date(WeakSet, Date, -128, ...v24, ...v22);
    return v26;
}
f25();
%PrepareFunctionForOptimization(f25);
%OptimizeFunctionOnNextCall(f25);
f25();
