const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v10 = {
            next() {
                127 in this;
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array(Symbol, 882);
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v3;
}
f15();
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
