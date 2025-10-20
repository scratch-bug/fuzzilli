const v3 = Symbol.iterator;
const v13 = {
    [v3]() {
        Object.setPrototypeOf(Object, Object()).isExtensible(Symbol, this, Symbol, this);
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
function f15() {
    new Date(WeakSet, Date, 882, ...v13, ...v13);
    return Date;
}
f15.call(v3, WeakSet, 882, Date, v13);
f15();
%OptimizeFunctionOnNextCall(f15);
f15();
