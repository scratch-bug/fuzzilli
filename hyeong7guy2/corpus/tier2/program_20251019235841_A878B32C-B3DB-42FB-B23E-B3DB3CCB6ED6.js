class C1 extends Set {
}
const v2 = new C1();
const v7 = Symbol.iterator;
const v12 = {
    [v7]() {
        const v11 = {
            next() {
                return { done: v2 };
            },
        };
        return v11;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v12);
    return 882;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
