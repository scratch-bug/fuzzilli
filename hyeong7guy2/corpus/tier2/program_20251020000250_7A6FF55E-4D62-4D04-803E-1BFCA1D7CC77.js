const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        const v13 = {
            next() {
                const v9 = { done: 10000 };
                class C11 extends this.constructor {
                }
                new C11(Symbol, 256);
                return v9;
            },
        };
        return v13;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(WeakSet, Date, -128, ...v16, ...v14);
    return v18;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
