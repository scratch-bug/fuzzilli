const v3 = Symbol.iterator;
const v10 = {
    [v3]() {
        const v6 = [-Infinity,2.0,-1000000000.0,-0.0];
        v6[7] = v6;
        const v9 = {
            next() {
                return { done: 10 };
            },
        };
        return v9;
    },
};
const v13 = new Int16Array();
function f14() {
    new Date(WeakSet, Date, 882, ...v13, ...v10);
    return Int16Array;
}
f14();
%PrepareFunctionForOptimization(f14);
%OptimizeFunctionOnNextCall(f14);
f14();
