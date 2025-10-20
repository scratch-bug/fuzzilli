const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v10 = {
            next() {
                const v8 = { done: 10 };
                try { new Promise(); } catch (e) {}
                return v8;
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return Int16Array;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
