const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        const v11 = {
            next() {
                const v7 = { done: Int16Array };
                -Math.cosh(this);
                return v7;
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
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
