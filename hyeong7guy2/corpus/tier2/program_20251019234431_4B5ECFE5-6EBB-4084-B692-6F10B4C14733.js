const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        const v12 = {
            next() {
                const v7 = { done: 10 };
                const v10 = (20000).constructor.isSafeInteger(10);
                class C11 {
                }
                C11.h = v10;
                return v7;
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    new Date(WeakSet, Date, 882, ...v16, ...v13);
    return v13;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
