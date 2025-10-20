const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        const v7 = Object();
        v7.c = v7;
        Object.setPrototypeOf(Object, v7).getPrototypeOf(v7);
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
function f15() {
    const v16 = new Date(WeakSet, Date, 882, ...v13, ...v13);
    return v16;
}
f15.call();
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
