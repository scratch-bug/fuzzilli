class C2 extends Float32Array {
}
const v3 = new C2();
const v5 = Symbol.iterator;
const v11 = {
    [v5]() {
        v3[3997] <<= 10;
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array(v3);
function f15() {
    new Date(Symbol, Date, 882, ...v14, ...v11);
    return Date;
}
f15();
%PrepareFunctionForOptimization(f15);
%OptimizeFunctionOnNextCall(f15);
f15();
