const v1 = new BigInt64Array();
let v6 = Symbol.iterator;
const v12 = {
    [v6]() {
        let v7 = this;
        const v11 = {
            next() {
                ({"buffer":v7,"byteLength":v7,"length":v6,} = v1);
                return { done: 10 };
            },
        };
        return v11;
    },
};
const v14 = new Int16Array();
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v14, ...v12);
    return v16;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
