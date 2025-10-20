const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        let v5 = 10;
        v5--;
        v5--;
        const v10 = {
            next() {
                return { done: v5 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return f15;
}
f15();
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
